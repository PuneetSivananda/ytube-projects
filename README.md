[//]: <> (Machine Learning Series TechWithTim: https://www.youtube.com/watch?v=ujTCoH21GlA&list=PLzMcBGfZo4-mP7qA9cagf68V06sko5otr)

### Notes
- Get source code
```sh
git clone -b python-machine-learning --single-branch https://github.com/PuneetSivananda/ytube-projects .
```

- Installation for tensorflow using pipenv
```sh
    pipenv install https://storage.googleapis.com/tensorflow/mac/cpu/tensorflow-0.12.0-py3-none-any.whl
    pipenv --venv 
```

- Setup using Conda
```sh 
    conda config --set auto_activate_base false

    conda create -n tensor python=3.8
    conda activate tensor
    conda install -c apple tensorflow-deps
    pip install tensorflow-macos   
    pip install tensorflow-metal 
    pip install tensorflow_datasets
    python main.py      
```


### Data Source

- https://archive.ics.uci.edu/ml/machine-learning-databases/00320/
- https://archive.ics.uci.edu/ml/machine-learning-databases/car/
- add the header to the car data
    - buying,maint,door,persons,lug_boot,safety,class