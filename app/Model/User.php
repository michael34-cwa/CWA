<?php 
namespace App\Model;

use Cartalyst\Sentinel\Users\EloquentUser as CartalystUser;
use Cartalyst\Sentinel\Users\UserInterface;

class User extends CartalystUser {

    /**
     * {@inheritDoc}
     */
    protected $table = 'users';

    /**
     * {@inheritDoc}
     */
    protected $fillable = [
        'email',
        'password',
        'last_name', 
        'first_name',
        'permissions',
        'phone', 
    ];

    /**
     * {@inheritDoc}
     */
    protected $hidden = [
        'password',
    ];

    /**
     * {@inheritDoc}
     */
    protected $persistableKey = 'user_id';

    /**
     * {@inheritDoc}
     */
    protected $persistableRelationship = 'persistences';

    /**
     * Array of login column names.
     *
     * @var array
     */
    protected $loginNames = ['email'];

    /**
     * The Eloquent roles model name.
     *
     * @var string
     */
    protected static $rolesModel = 'Cartalyst\Sentinel\Roles\EloquentRole';

    /**
     * The Eloquent persistences model name.
     *
     * @var string
     */
    protected static $persistencesModel = 'Cartalyst\Sentinel\Persistences\EloquentPersistence';

    /**
     * The Eloquent activations model name.
     *
     * @var string
     */
    protected static $activationsModel = 'Cartalyst\Sentinel\Activations\EloquentActivation';

    /**
     * The Eloquent reminders model name.
     *
     * @var string
     */
    protected static $remindersModel = 'Cartalyst\Sentinel\Reminders\EloquentReminder';

    /**
     * The Eloquent throttling model name.
     *
     * @var string
     */
    protected static $throttlingModel = 'Cartalyst\Sentinel\Throttling\EloquentThrottle';

    /**
     * Returns an array of login column names.
     *
     * @return array
     */
 
    

}