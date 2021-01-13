<?php

class Download_excel_peserta_model extends CI_Model{

function fetch_data(){

  $this->db->order_by("id", "DESC");

  $query = $this->db->get("import");

  return $query->result();

}

}
?>