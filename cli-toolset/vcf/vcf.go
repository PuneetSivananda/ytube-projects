package main

import (
	"fmt"
	"os"

	"github.com/brentp/vcfgo"
)

// Vcf reader functionalities
// Parse vcf and get details either for the whole file or part of a file after selecting a subset of matching data
func main() {
	f, _ := os.Open("../data/testVcf/sample.vcf")
	rdr, err := vcfgo.NewReader(f, false)
	if err != nil {
		panic(err)
	}
	for {
		variant := rdr.Read()
		if variant == nil {
			break
		}

		fmt.Printf("%s\t%d\t%s\t%v", variant.Chromosome, variant.Pos, variant.Ref(), variant.Alt())
		alleleID, _ := variant.Info().Get("ALLELEID")
		CLNDISDB, _ := variant.Info().Get("CLNDISDB")
		CLNDN, _ := variant.Info().Get("CLNDN")
		CLNHGVS, _ := variant.Info().Get("CLNHGVS")
		CLNREVSTAT, _ := variant.Info().Get("CLNREVSTAT")
		CLNSIG, _ := variant.Info().Get("CLNSIG")
		CLNVC, _ := variant.Info().Get("CLNVC")
		CLNVCSO, _ := variant.Info().Get("CLNVCSO")
		GENEINFO, _ := variant.Info().Get("GENEINFO")
		MC, _ := variant.Info().Get("MC")
		ORIGIN, _ := variant.Info().Get("ORIGIN")
		RS, _ := variant.Info().Get("RS")
		fmt.Printf("%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%v\t", alleleID, CLNDISDB, CLNDN, CLNHGVS, CLNREVSTAT, CLNSIG, CLNVC, CLNVCSO, GENEINFO, MC, ORIGIN, RS)
	}
	fmt.Fprintln(os.Stderr, rdr.Error())
}
