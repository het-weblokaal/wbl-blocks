<section class="posts">

	<?php if ( have_posts() ) : ?>

		<?php while ( have_posts() ) : the_post(); ?>

			<?php echo \HWL\Blokkendoos\render_posts_post(); ?>

		<?php endwhile; ?>

		<?php echo \HWL\Blokkendoos\render_posts_pagination(); ?>

	<?php else : ?>

		<p><?= __('No results', 'hwl-wbl') ?></p>

	<?php endif; ?>

</section>
