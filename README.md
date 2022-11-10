[//]: <> (Machine Learning Series TechWithTim: https://www.youtube.com/watch?v=ujTCoH21GlA&list=PLzMcBGfZo4-mP7qA9cagf68V06sko5otr)

### Notes
- Installation for tensorflow using pipenv
```sh
    pipenv install https://storage.googleapis.com/tensorflow/mac/cpu/tensorflow-0.12.0-py3-none-any.whl
    pipenv --venv 
```

- Setup using Conda
```sh 
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