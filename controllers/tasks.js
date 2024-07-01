const Task = require('../models/Task.js')
const express = require('express')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper ( async (req, res) => { 
    const tasks = await Task.find({})
    res.status(201).json({ tasks })
})

const getTaskById = asyncWrapper( async (req, res) => {
        const {id: taskID} = req.params
        const task = await Task.findOne({
            _id: taskID
        })
        if (!task) {
            return res.status(404).json({ msg: `No task with the id: ${taskID} were found`})
        }
        res.status(200).json({ task })
})

const createTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const updateTask = asyncWrapper ( (req, res) => {
    res.send('Task updated sucessfully')
})

const deleteTask = asyncWrapper ( (req, res) => {
    res.send('Task deleted sucessfully')
})

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask }