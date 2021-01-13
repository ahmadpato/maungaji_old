<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model("product_model");
        $this->load->library('form_validation');
    }

    public function index()
    {
        $data["products"] = $this->product_model->getAll();
        $this->load->view("admin/product/list", $data);
    }

    public function count()
    {
        $data["murid"] = $this->product_model->getCount();

        $data["guru"] = $this->product_model->getCountTeachers();
        $this->load->view("welcome_message", $data);
    }

    public function add()
    {
        $product = $this->product_model;
        $validation = $this->form_validation;
        $validation->set_rules($product->rules());

        if ($validation->run()) {
            $product->save();
            $this->session->set_flashdata('success', 'Berhasil disimpan');
        } else {
            $this->session->set_flashdata('error', 'Gagal disimpan');
        }

        $this->load->view("admin/product/new_form");
    }

    public function edit($id = null)
    {
        if (!isset($id)) redirect('admin/products');
       
        $product = $this->product_model;
        $validation = $this->form_validation;
        $validation->set_rules($product->rules());

        if ($validation->run()) {
            $product->update();
            $this->session->set_flashdata('success', 'Berhasil disimpan');
        }

        $data["product"] = $product->getById($id);
        if (!$data["product"]) show_404();
        
        $this->load->view("admin/product/edit_form", $data);
    }

    public function view($id = null)
    {
        if (!isset($id)) redirect('admin/products');
       
        $product = $this->product_model;
        $validation = $this->form_validation;
        $validation->set_rules($product->rules());

        if ($validation->run()) {
            $product->update();
            $this->session->set_flashdata('success', 'Berhasil disimpan');
        }

        $data["product"] = $product->getById($id);
        if (!$data["product"]) show_404();
        
        $this->load->view("admin/product/view_form", $data);
    }

    public function delete($id=null)
    {
        if (!isset($id)) show_404();
        
        if ($this->product_model->delete($id)) {
            redirect(site_url('admin/products'));
        }
    }

    public function action(){

      $this->load->model("product_model");

      $this->load->library("Libexcel");

      $object = new PHPExcel();

      $object->setActiveSheetIndex(0);

      $table_columns = array("Name", "Email", "Instagram", "No_hp", "Alamat");

      $column = 0;

      foreach($table_columns as $field){

        $object->getActiveSheet()->setCellValueByColumnAndRow($column, 1, $field);

        $column++;

      }

      for ($i = 'A'; $i !== 'F'; $i++) {
            $object->getActiveSheet()->getColumnDimension($i)->setAutoSize(true);
        }

      $peserta = $this->product_model->getAll();

      $excel_row = 2;

      foreach($peserta as $row){

        $object->getActiveSheet()->setCellValueByColumnAndRow(0, $excel_row, $row->name);

        $object->getActiveSheet()->setCellValueByColumnAndRow(1, $excel_row, $row->email);

        $object->getActiveSheet()->setCellValueByColumnAndRow(2, $excel_row, $row->instagram);

        $object->getActiveSheet()->setCellValueByColumnAndRow(3, $excel_row, $row->no_hp);

        $object->getActiveSheet()->setCellValueByColumnAndRow(4, $excel_row, $row->alamat);

        $excel_row++;

      }

      $object_writer = PHPExcel_IOFactory::createWriter($object, 'Excel5');

      header('Content-Type: application/vnd.ms-excel');

      header('Content-Disposition: attachment;filename="peserta.xls"');

      $object_writer->save('php://output');

    }
}
