<?php
add_action( 'wp_enqueue_scripts', 'gbl_enqueue_styles' );

function gbl_enqueue_styles() {

    $parent_style = 'sela-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css', array( 'genericons' ) );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_script( 'sticky-menu', get_stylesheet_directory_uri() . '/js/sticky-menu.js', array( 'jquery' ), wp_get_theme()->get('Version'), true);
	  wp_enqueue_script( 'questions-reponses', get_stylesheet_directory_uri() . '/js/questions-reponses.js', array( 'jquery' ), wp_get_theme()->get('Version'), true);
}
?>
