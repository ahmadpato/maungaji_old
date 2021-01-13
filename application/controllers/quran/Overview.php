<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Overview extends CI_Controller {
    public function __construct()
    {
		parent::__construct();
        $this->load->helper('url');
        $this->load->model("product_model");
	}

	public function index()
	{
        error_reporting(E_ALL);

        ini_set('display_errors', 1);

        $getQuran = $this->http_request("http://staging.quran.com:3000/api/v3/chapters");

        // ubah string JSON menjadi array
        $x['quran'] = json_decode($getQuran, TRUE);

        $this->load->view("quran/quran", $x);
	}

    function http_request($url){
        // persiapkan curl
        $ch = curl_init(); 

        // set url 
        curl_setopt($ch, CURLOPT_URL, $url);
        
        // set user agent    
        curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');

        // return the transfer as a string 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

        // $output contains the output string 
        $output = curl_exec($ch); 

        // tutup curl 
        curl_close($ch);      

        // mengembalikan hasil curl
        return $output;
    }
}
