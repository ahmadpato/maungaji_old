<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
    {
        error_reporting(E_ALL);
		ini_set('display_errors', 1);

        parent::__construct();
        $this->load->helper('url');
     
    }

	public function index()
	{
		error_reporting(E_ALL);

		ini_set('display_errors', 1);

      $countData = $this->http_request("http://13.59.145.203:8000/v1/landing");

	  // ubah string JSON menjadi array
	  $x['murid'] = json_decode($countData, TRUE);
        
      $this->load->view("welcome_message", $x);
    //$this->load->view("welcome_message");
	}

	public function about()
	{
		$this->load->view('about.php');
	}

	public function contact()
	{
		$this->load->view('contact.php');
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
