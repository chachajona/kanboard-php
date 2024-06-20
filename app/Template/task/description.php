<details class="accordion-section" <?= empty($task['description']) ? '' : 'open' ?>>
    <summary class="accordion-title"><?= t('Description') ?></summary>
    <div class="accordion-content">
        <article class="markdown">
            <?= strip_tags($task['description'], '<p><a><ul><ol><li><b><i><strong><em><u><s><strike><span><h1><h2><h3><h4><h5><h6><blockquote><code><pre><table><tr><td><th><tbody><thead><tfoot><img><figure><figcaption><hr><br>'); ?>
        </article>
    </div>
</details>