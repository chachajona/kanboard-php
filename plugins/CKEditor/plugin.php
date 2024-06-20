<?php
namespace Kanboard\Plugin\CKEditor;

use Kanboard\Core\Plugin\Base;

class Plugin extends Base
{
  public function initialize()
  {
    $cspRules = $this->container['cspRules'];

    $this->hook->on('template:layout:js', array('template' => 'plugins/CKEditor/assets/custom.js'));

    $this->hook->on('template:layout:css', array('template' => 'plugins/CKEditor/assets/ckeditor.css'));

    if (!isset($cspRules['script-src'])) {
      $cspRules['script-src'] = "'self' https://cdn.ckeditor.com";
    } else {
      $cspRules['script-src'] .= " https://cdn.ckeditor.com";
    }
    $this->setContentSecurityPolicy($cspRules);

  }

  public function getPluginName()
  {
    return 'CKEditor';
  }

  public function getPluginAuthor()
  {
    return 'CKEditor';
  }

  public function getPluginVersion()
  {
    return '41.2.1';
  }
}

?>