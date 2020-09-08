<article class="post-plural <?= $post_classes ?>">

	<header class="post-plural__header">
		<h2 class="post-plural__title">
			<a href="<?php the_permalink() ?>"><?php the_title() ?></a>
		</h2>
	</header>

	<div class="post-plural__main">
		<?php the_excerpt(); ?>
	</div>

	<footer class="post-plural__footer">

		<div class="post-plural__meta-group">

			<div class="meta meta--date"><?= get_the_date() ?></div>

		</div>

		<a href="<?php the_permalink() ?>" class="post-plural__button button"><?= __('Lees verder', 'hwl-blokkendoos') ?></a>
	</footer>

</article>
