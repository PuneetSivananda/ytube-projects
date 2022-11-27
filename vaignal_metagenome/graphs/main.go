package main

import (
	"fmt"
	"math"

	"github.com/guptarohit/asciigraph"
)

func main() {
	data := make([][]float64, 4)

	for i := 0; i < 4; i++ {
		for x := -20; x <= 20; x++ {
			v := math.NaN()
			if r := 20 - i; x >= -r && x <= r {
				v = math.Sqrt(math.Pow(float64(r), 2)-math.Pow(float64(x), 2)) / 2
			}
			data[i] = append(data[i], v)
		}
	}
	graph := asciigraph.PlotMany(data, asciigraph.Precision(0), asciigraph.SeriesColors(
		asciigraph.Red,
		asciigraph.Yellow,
		asciigraph.Green,
		asciigraph.Blue,
	))

	fmt.Println(graph)
}
