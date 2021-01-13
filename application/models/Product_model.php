<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Product_model extends CI_Model
{
    private $_table = "teachers";

    public $id;
    public $name;
    public $email;
    public $no_hp;
    public $instagram;
    public $alamat;

    public function rules()
    {
        return [
            ['field' => 'nama',
            'label' => 'Nama',
            'rules' => 'String'],

            ['field' => 'email',
            'label' => 'Email',
            'rules' => 'required'],

            ['field' => 'No Hp',
            'label' => 'no_hp',
            'rules' => 'numeric'],

             ['field' => 'instagram',
            'label' => 'Instagram'],
            // 'rules' => 'String'],

            ['field' => 'Alamat',
            'label' => 'alamat',
            'rules' => 'String'],
        ];
    }

    public function getAll()
    {
        return $this->db->get($this->_table)->result();
    }
    
    public function getCount()
    {
        $this->db->select('COUNT(id) as total');
        $hasil = $this->db->get('customers');
        return $hasil;
    }

    public function getCountTeachers()
    {
        $this->db->select('COUNT(id) as total_guru');
        $hasil = $this->db->get('teachers');
        return $hasil;
    }

    public function getTeachers()
    {
        $hasil = $this->db->get('teachers');
        return $hasil;
    }

    public function getById($id)
    {
        return $this->db->get_where($this->_table, ["id" => $id])->row();
    }

    public function save()
    {
        $post = $this->input->post();
        $this->id = uniqid();
        $this->name = $post["name"];
        $this->email = $post["email"];
        $this->no_hp = $post["no_hp"];
        $this->instagram = $post["instagram"];
        $this->alamat = $post["alamat"];
        $this->db->insert($this->_table, $this);
    }

    public function update()
    {
        $post = $this->input->post();
        $this->id = $post["id"];
        $this->email = $post["email"];
        $this->name = $post["name"];
        $this->no_hp = $post["no_hp"];
        $this->instagram = $post["instagram"];
        $this->alamat = $post["alamat"];
        $this->db->update($this->_table, $this, array('id' => $post['id']));
    }

    public function delete($id)
    {
        return $this->db->delete($this->_table, array("id" => $id));
    }
}
