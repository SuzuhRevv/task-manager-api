const Task = require('../models/Task.js')
const express = require('express')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({ status: 'success', data: { tasks, nbHits: tasks.length }})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTaskById = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({
            _id: taskID
        })
        if (!task) {
            return res.status(404).json({ msg: `No task with the id: ${taskID} were found`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
    }

const updateTask = (req, res) => {
    res.send('Task updated sucessfully')
}

const deleteTask = (req, res) => {
    res.send('Task deleted sucessfully')
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask }