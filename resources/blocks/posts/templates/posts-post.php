<article class="posts-post">

	<header class="posts-post__header">
		<h2 class="posts-post__title">
			<a href="<?php the_permalink() ?>"><?php the_title() ?></a>
		</h2>
	</header>

	<div class="posts-post__main">
		<?php the_excerpt(); ?>
	</div>

	<footer class="posts-post__footer">

		<div class="posts-post__meta-group">

			<div class="meta meta--date"><?= get_the_date() ?></div>

		</div>

		<a href="<?php the_permalink() ?>" class="posts-post__button button"><?= __('Lees verder', 'wbl-blocks') ?></a>
	</footer>

</article>
