<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Clear the permission cache so new entries are recognized
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();


        // Define all 12 permissions for the system
        $permissions = [
            'view employees',
            'manage employees',
            'view departments',
            'manage departments',
            'view projects',
            'manage projects',
            'view tasks',
            'create tasks',
            'edit tasks',
            'delete tasks',
            'manage users',
            'manage roles',
        ];


        // Create each permission in the database
        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }


        // Developer role gets every permission
        $developerRole = Role::create(['name' => 'developer']);
        $developerRole->givePermissionTo(Permission::all());

        // Admin role gets every permission
        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo(Permission::all());


        // Manager role: can view employees, manage projects and tasks
        $managerRole = Role::create(['name' => 'manager']);
        $managerRole->givePermissionTo([
            'view employees',
            'view departments',
            'view projects',
            'manage projects',
            'view tasks',
            'create tasks',
            'edit tasks',
            'delete tasks',
        ]);


        // Employee role: basic task permissions only
        $employeeRole = Role::create(['name' => 'employee']);
        $employeeRole->givePermissionTo([
            'view tasks',
            'create tasks',
            'edit tasks',
        ]);
    }
}
