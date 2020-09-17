<?php 

function enqueue_parent_theme_style() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}add_action( 'wp_enqueue_scripts', 'enqueue_parent_theme_style' );

function enqueue_child_theme_style() {
  wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/style.css' );
}add_action( 'wp_enqueue_scripts', 'enqueue_child_theme_style', 100 );

function enqueue_child_theme_scripts() {
 wp_enqueue_script( 'child-js', get_stylesheet_directory_uri() . '/assets/js/main.js');
}add_action('wp_enqueue_scripts','enqueue_child_theme_scripts');

wp_enqueue_script( 'jquery', get_template_directory_uri() . '/assets/js/jquery.js', array('jquery'), '1.0', true );
