<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Teacher_model extends CI_Model
{
	private $_table = "teachers";

    public function getAll()
    {
        $this->db->select('teachers.id,teachers.name AS teacher_name,teachers.status,teachers.gender,teachers.avatar,teachers.experience,teachers.description,skillsets.name');
        $this->db->from('teachers');
        $this->db->join('skillsets', 'teachers.id = skillsets.id','left');
        $this->db->where('teachers.avatar IS NOT NULL');
        $this->db->order_by('teachers.name','asc'); 
        $query = $this->db->get();
        return $query->result ();
    }
    
}
