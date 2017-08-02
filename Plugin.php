<?php
/*
Plugin Name: Example Plugin
Plugin URI: https://github.com/Edgar-Saavedra/edgarsaavedra-wp-custom-plugin-example
Description: A wordpress plugin
Version: 1.0
Author: Edgar-Saavedra
Text Domain: edgarsaavedra-wp-custom-plugin-example
Domain Path: /languages/

	License: GNU General Public License v3.0
	License URI: http://www.gnu.org/licenses/gpl-3.0.html
*/

global $CustomPlugin;
$CustomPlugin = dirname(plugin_basename(__FILE__));
global $WPCustomPlugins;
$WPCustomPlugins[$CustomPlugin] = array(
 "version" => '0.1',
 "plugin_path" => plugin_dir_path(__FILE__),
 "plugin_dirname" => $CustomPlugin,
 "plugin_url" => plugin_dir_url(__FILE__)
);

// don't load directly
if (!defined('ABSPATH')) {
    die('You shouldnt be here');
}


register_activation_hook(__FILE__, function(){
//    An example dependency, in this case visual composer
//    if (!is_plugin_active('js_composer/js_composer.php')) {
//        wp_die('Please activate Visual Composer, and try again!');
//    }
});

if (!function_exists('wm_wp_custom_sp_maps_text_domain')) {
    /**
     * Loads plugin text domain so it can be used in translation
     */
    function wm_wp_custom_sp_maps_text_domain() {
        global $WPCustomPlugins;
        load_plugin_textdomain('wm-wp-custom-sp-maps', FALSE, $WPCustomPlugins['edgarsaavedra-wp-custom-plugin-example']['plugin_path'] . '/languages');
    }

    add_action('plugins_loaded', __NAMESPACE__ . '\\wm_wp_custom_sp_maps_text_domain');
}

//autloaded folder
$assets = dirname(__FILE__).'/src/';


//our autoloader
require(dirname(__FILE__).'/ClassAutoLoader.php');
$loader = \ClassAutoloader::getLoader();

//set and register our namespace
$loader->setPsr4('Custom\\Plugins\\CustomPluginExample\\', $assets);
$loader->register();

//load our plugin data
$plugin = new \Custom\Plugins\CustomPluginExample\Load();

// Activation Hook
register_activation_hook(
    __FILE__,
    [$plugin, 'activate']
);

// Deactivation Hook
register_deactivation_hook(
    __FILE__,
    [$plugin, 'deactivate']
);