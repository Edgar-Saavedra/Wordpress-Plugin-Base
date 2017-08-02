<?php

namespace Custom\Plugins\CustomPluginExample\Helpers
{
	class Helpers
	{
		/**
			* A helper method to return the system path of a file. Helpful for when
			* wanting to include files without having to manually write out the path
			* TODO: Figure out how to not use global variables, to avoid having to rename them when a new plugin is created.
			* @return mixed
			* @throws \Exception
			*/
		static function getPluginPath()
		{
			global $CustomPlugin;
			global $CustomPlugins;
//		return realpath(__DIR__ . '/../..');
			if($CustomPlugins[$CustomPlugin] && $CustomPlugins[$CustomPlugin]['plugin_path'] )
				return $CustomPlugins[$CustomPlugin]['plugin_path'];
			else
				throw new \Exception('New Custom Plugin : Be sure to set the global plugin variables!');
		}

		/**
			* A helper method to get the plugin web url. This helps to easily include
			* frontend resources without having to worry about where the plugin is located.
			* TODO: Figure out how to not use global variables, to avoid having to rename them when a new plugin is created.
			* @return mixed
			* @throws \Exception
			*/
		static function getPluginUrl()
		{
//		return plugins_url('edgarsaavedra-wp-custom-plugin-example');
			global $CustomPlugin;
			global $CustomPlugins;
			if($CustomPlugins[$CustomPlugin] && $CustomPlugins[$CustomPlugin]['plugin_path'] )
				return $CustomPlugins[$CustomPlugin]['plugin_url'];
			else
				throw new \Exception('New Custom Plugin : Be sure to set the global plugin variables!');
		}
	}
}
