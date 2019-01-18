<?php
/*
Plugin Name: NTAREI Grandchild Theme
Plugin URI: http://www.markwhitted.com/
Description: A WordPress Grandchild Theme (as a plugin)
Author: Mark Whitted
Version: 0.1
Author URI: http://www.markwhitted.com/
Text Domain: ntarei-gc-theme
Domain Path: /languages
*/



// These two lines ensure that your CSS is loaded alongside the parent or child theme's CSS
add_action('wp_head', 'ntarei_gc_theme_add_headers', 0);
add_action('init', 'ntarei_gc_theme_add_css');

// This filter replaces a complete file from the parent theme or child theme with your file (in this case the archive page).
// Whenever the archive is requested, it will use YOUR archive.php instead of that of the parent or child theme.
// add_filter ('archive_template', create_function ('', 'return plugin_dir_path(__FILE__)."archive.php";'));

function ntarei_gc_theme_add_headers () {
    wp_enqueue_style('grandchild_style');
}

function ntarei_gc_theme_add_css() {
    $timestamp = @filemtime(plugin_dir_path(__FILE__).'/css/style.css');
    wp_register_style ('grandchild_style', plugins_url('/css/style.css', __FILE__).'', array(), $timestamp);
}

// In the rest of your plugin, add your normal actions and filters, just as you would in functions.php in a child theme.

		/**
		 * Registers the Sponsors custom post type
		 */
		function gct_sponsors_register() {
			$args = array(
				'public'               => true,
				'label'                => 'Sponsors',
				'public'               => true,
				'exclude_from_search'  => false,
				'publicly_queryable'   => true,
				'show_ui'              => true,
				'show_in_menu'         => true,
				'show_in_admin_bar'    => false,
				'menu_position'        => 5,
				'menu_icon'            => 'dashicons-format-image',
				'query_var'            => true,
				'rewrite'              => false,
				'capability_type'      => 'post',
				'has_archive'          => false,
				'hierarchical'         => false,
				'can_export'           => true,
				'query_var'            => false,
				'capability_type'      => 'post',
				'supports'             => array( 'title', 'page-attributes' ),
				'taxonomies'           => array( 'sponsor_categories' ),
				'register_meta_box_cb' => 'add_sponsor_metabox'
			);
			register_post_type( 'sponsor', $args );
		}

		remove_action( 'init', 'sponsors_register' );
        add_action( 'init', 'gct_sponsors_register' );


