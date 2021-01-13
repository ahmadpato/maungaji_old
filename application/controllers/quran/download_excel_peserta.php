<?php

defined('BASEPATH') OR exit('No direct script access allowed');

  class Download_excel_peserta extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model("product_model");
    }

    function index(){

      $this->load->model("product_model");

      $data["peserta"] = $this->product_model->fetch_data();

     $this->load->view("admin/product/list", $data);

    }

    function action(){

      $this->load->model("product_model");

      $this->load->library("Libexcel");

      $object = new PHPExcel();

      $object->setActiveSheetIndex(0);

      $table_columns = array("name", "email");

      $column = 0;

      foreach($table_columns as $field){

        $object->getActiveSheet()->setCellValueByColumnAndRow($column, 1, $field);

        $column++;

      }

      $peserta = $this->product_model->fetch_data();

      $excel_row = 2;

      foreach($peserta as $row){

        $object->getActiveSheet()->setCellValueByColumnAndRow(0, $excel_row, $row->name);

        $object->getActiveSheet()->setCellValueByColumnAndRow(1, $excel_row, $row->email);

        $excel_row++;

      }

      $object_writer = PHPExcel_IOFactory::createWriter($object, 'Excel5');

      header('Content-Type: application/vnd.ms-excel');

      header('Content-Disposition: attachment;filename="Employee Data.xls"');

      $object_writer->save('php://output');

    }

  }

?>