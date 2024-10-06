<?php
function getArrayFromCSV($csvUrl){
    //Devuelve un array asociativo con la información contenida en el csv que se encuentra en la url que se le pasa como parámetro
    dump($csvUrl);
    dump('**********');
    $filas = explode("\n",file_get_contents($csvUrl));
    dump('??????');
    dump('$filas antes');
    dump($filas);
    dump('??????');
    $nombreCols = explode(',', array_shift($filas));
    dump('$filas despues');
    dump($filas);
    dump('$nombreCols');
    dump($nombreCols);
    array_walk($filas,'divide_columnas', $nombreCols);
    dump('++++++++++++++++++++');
    dump($filas);
    dump('++++++++++++++++++++');
}
function divide_columnas(&$arrayItem, $key, $nombreCols){
    dump('**************');
    dump($arrayItem);
    dump($key);
    dump('$nombreCols');
    dump($nombreCols);
    $arrayItem = array_combine($nombreCols, explode(',',$arrayItem));
    dump('**************');
}
function getListMarkup(array $list){
    $output = '';
    $output .= '<ul>';
    foreach($list as $clave=>$valor){
        $output.='<li>';
        if(is_array($valor)){
            //Hay que imprimir la lista representada
            $output.= getListMarkup($valor);
        }else{
            //Hay que imprimir el valor
            $output.= $valor;
        }
        $output.='</li>';
    }
    $output .= '</ul>';
    return $output;
}
function dump($var){
    echo '<pre>'.print_r($var, true).'</pre>';
}