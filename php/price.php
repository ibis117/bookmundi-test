<?php

function dd()
{
    echo '<pre>';
    array_map(function($x) {var_dump($x);}, func_get_args());
    die;
}
class PriceReport {

    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }


    public function filterBy($key, $param) {
        $this->data = array_filter($this->data, function ($value) use ($key, $param) {
            return $value[$key] > $param;
        });

        return $this;
    }

    public function total($key)
    {
        return array_sum(array_column($this->data, $key));
    }

    public function get()
    {
        return $this->data;
    }

}
$data = [
    [
        'id' => 1,
        'price' => 100
    ],

    [
        'id' => 2,
        'price' => 200
    ],

    [
        'id' => 3,
        'price' => 300
    ],

    [
        'id' => 4,
        'price' => 400
    ],

    [
        'id' => 5,
        'price' => 500
    ],
];

$report = new PriceReport($data);
$report = $report->filterBy('price', 200);

$prices = $report->get();
$total = $report->total('price');

