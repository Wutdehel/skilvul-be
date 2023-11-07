const datas = {
    data: [
        { id: 1 ,username: "udin", password: "asd", email: "male@example.com"  },
        { id: 2 ,username: "doni", password: "asdsa", email: "male@example.com"  },
        { id: 3 ,username: "udin", password: "sdass", email: "male@example.com"  },
        { id: 4 ,username: "udin", password: "sdas", email: "male@example.com"  }
    ]
}

function View (req,res) {
    res.status(200).send(datas)
}

function Register(req, res, next) {
    const newEntry = req.body;
    datas.data.push(newEntry);
    res.json({ message: 'Data added successfully', data: datas.data });
}

function Delete (req, res, next) {
    const idToDelete = parseInt(req.params.id);
    const indexToDelete = datas.data.findIndex((item) => item.id === idToDelete);

    if (indexToDelete !== -1) {
        datas.data.splice(indexToDelete, 1);
        res.json({ message: 'Data deleted successfully', data: datas.data });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
}

function Edit(req, res, next) {
  const idToUpdate = parseInt(req.params.id);
  const updatedData = req.body; 

  const indexToUpdate = datas.data.findIndex((item) => item.id === idToUpdate);

  if (indexToUpdate !== -1) {
    datas.data[indexToUpdate] = updatedData;
    res.json({ message: 'Data updated successfully', data: datas.data });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
}

module.exports = {
    Register,
    View,
    Delete,
    Edit
}