<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Teachers extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model("teacher_model");
        $this->load->library('form_validation');
    }

    public function index()
    {
        $data["teacher"] = $this->teacher_model->getAll();

        $data["url"] = "https://maungaji-2019.s3-ap-southeast-1.amazonaws.com";

        $this->load->view("teacher/teacher", $data);
    }

}
