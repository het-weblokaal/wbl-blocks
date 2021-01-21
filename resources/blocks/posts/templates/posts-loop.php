<?php

use function WBL_Blocks\render_posts_post;
use function WBL_Blocks\render_posts_pagination;

?>
<div class="posts">

	<?php if ( have_posts() ) : ?>

		<?php while ( have_posts() ) : the_post(); ?>

			<?php echo render_posts_post(); ?>

		<?php endwhile; ?>

		<?php echo render_posts_pagination(); ?>

	<?php else : ?>

		<p><?= __('No results', 'wbl-blocks') ?></p>

	<?php endif; ?>

</div>
