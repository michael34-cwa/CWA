<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Builder;
// //use Illuminate\Database\Eloquent\SoftDeletes;
// use Illuminate\Contracts\Pagination\Paginator;
// use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Courses extends Model
{
    // use soft delete instead of permanent delete
 //   use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses';

    protected $fillable = [ 'course_name', 'course_description', 'cat_id', 'is_active'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
   // protected $dates = ['deleted_at', 'published_at'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
  
    /**
     * Load all for admin and paginate
     * 
     */

   public function getCategory()
    {   
    return $this->belongsToMany('App\Model\CourseCategories', 'category_courses', 'course_id', 'cat_id');
     }

 

    // /**
    //  * Load all for logged in user and paginate
    //  *
    //  * @param $user_id
    //  *
    //  * @return Paginator
    //  */
    // public static function loadAllMine(int $user_id): Paginator
    // {
    //     return static::latest()
    //         ->mine($user_id)
    //         ->paginate();
    // }

    // /**
    //  * load all published with pagination
    //  *
    //  * @return Paginator
    //  */
    // public static function loadAllPublished(): Paginator
    // {
    //     return static::with([
    //         'user' => function (BelongsTo $query) {
    //             $query->select('id', 'name');
    //         },
    //     ])
    //         ->latest()
    //         ->published()
    //         ->paginate();
    // }

    // /**
    //  * load one published
    //  *
    //  * @param string $slug
    //  *
    //  * @return \App\Article
    //  */
    // public static function loadPublished(string $slug): Article
    // {
    //     return static::with([
    //         'user' => function (Builder $query) {
    //             $query->select('id', 'name');
    //         },
    //     ])
    //         ->published()
    //         ->where('slug', $slug)
    //         ->firstOrFail();
    // }

    // /**
    //  * Add query scope to get only published articles
    //  *
    //  * @param Builder $query
    //  *
    //  * @return Builder
    //  */
    // public function scopePublished(Builder $query): Builder
    // {
    //     return $query->where([
    //         'published' => true,
    //     ]);
    // }

    // /**
    //  * Load only articles related with the user id
    //  *
    //  * @param Builder $query
    //  * @param int $user_id
    //  *
    //  * @return Builder
    //  */
    // public function scopeMine(Builder $query, int $user_id): Builder
    // {
    //     return $query->where('user_id', $user_id);
    // }

    // /**
    //  * Relationship between articles and user
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    //  */
    // public function user(): BelongsTo
    // {
    //     return $this->belongsTo(User::class);
    // }
}
