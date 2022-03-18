### Use Case for a vcf file.

- must create a cli toolset
- toolset must interact with the various regions
- get the summarry statistics for the region
- print out/ generate output files and statistics outputs as csv, graphs as png - pdf files with template

### sourcing the data:

- for creating the bed files go to
  - https://www.ncbi.nlm.nih.gov/tools/sviewer/seqtrackdata/#download-track refer documentation
  - https://www.ncbi.nlm.nih.gov/genome/gdv/browser/genome/?id=GCF_000001405.25#menu
  - select download tract data, click download

- data prep: 
  - split large file `clinvar % split -l 500000 ../clinvar.vcf clinvar.`
## Use Case:

A: Get the summary statistics of the ClinVar variants on target regions.

Input:

a target file (.bed format) contains multiple regions from chr13:26000000-36000000 of human reference genome GRCh37 (hg19): grch37.testregion.bed

Refseq exon list file (.bed format) for all human coding genes, the position is also based on GRCh37

Public resource:

ClinVar variant list: https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh37/clinvar.vcf.gz It is a vcf file that contains all the details of all ClinVar variants.
Objective:

For all genes located in chr13:26000000-36000000, get the summary statistics of the target file coverage. (For each gene, get the fraction of exonic bases that was covered by the target file)

Useful tool: https://bedtools.readthedocs.io/en/latest/

For all the ClinVar variants that are located in this region: chr13:26000000-36000000, get the number of the variants with key: CLINSIG is “Pathogenic” or “Likely_pathogenic” or “Pathogenic/Likely_pathogenic” for each gene (key:GENE in INFO section of vcf file) and each molecular consequence (key:MC in INFO section of vcf file, it contains some useless numbers). The table should look like this (example), it would be better if you can do it through a database approach.

--- missense_variant frameshift_variant nonsense
GeneA 10 1 2
GeneB 5 4 3
GeneC 3 1 5
For all the ClinVar variants that are located in the target region file (grch37.testregion.bed), generate a similar table as in Objective 2, and identify the major differences between them.

Prepare the scripts for task 1&2 and the Dockerfile that will install related tools, run the scripts based on the provided input files and generate the result data in tsv/csv file format.

Expected result:

Scripts (any language) and dockerfile (code)

Automatically generated result data (tsv/csv)

Description file of the results generated (txt)
B: Annotate the variants in vcf file and find the likely pathogenic variants

Input:

test.vcf.gz file, which contains all exonic variants in chromosome X from a female.

Public resource:

Public variant databases/annotation tools.

Objective:

Annotate the variants in the vcf files with public resources, including but not limited to located gene, type, consequence, population frequency and record in patient/research databases.

Figure out the potentially pathogenic variants and provide reason (limit to top 3 if more than 3 variants)

Expected result:

Annotated variant table (tsv/csv)

potentially pathogenic variant list with reasons (txt)
