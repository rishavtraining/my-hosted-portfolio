export const experienceData = [
  {
    id: 1,
    company: "Experian",
    role: "Senior Software Engineer",
    duration: "Nov 2025 - Present",
    location: "Hyderabad, India",
    responsibilities: [
      "Own end-to-end design and delivery of an internal usage-based billing platform on AWS (EKS, EventBridge, Kinesis), shaping the solution design and deploying the infrastructure and core billing workflow",
      "Built a serverless pipeline (EventBridge, Kinesis Firehose, S3) processing 1M+ events/day into partitioned Parquet datasets, with multi-stage buffering and failure handling for downstream billing and analytics",
      "Migrated identifier PIN lookups for 10M consumers from a legacy mainframe to a cloud endpoint on EKS and DynamoDB, cutting operating costs by roughly 40%. Validated the move with an Apigee shadow run comparing latency and correctness against live traffic, added circuit-breaker fallback and Splunk monitoring, then cut over in waves with zero consumer impact"
    ],
    tech: ["AWS", "EKS", "EventBridge", "Kinesis", "DynamoDB", "Apigee", "Splunk"]
  },
  {
    id: 2,
    company: "Barclays",
    role: "Software Developer II",
    duration: "Oct 2022 - Nov 2025",
    location: "Pune, India",
    responsibilities: [
      "Re-architected statement storage for 10M+ credit card customers after production writes hit DynamoDB's 4MB item limit: shipped a tactical fix offloading oversized records to S3 to unblock affected customers, then led the move to unified S3-based storage, removing dual-read logic for downstream teams",
      "Decoupled the core Statement platform's synchronous flows with SQS-based asynchronous processing and DLQ error handling, doubling throughput from 40K to 80K events/day for monthly statements",
      "Delivered the Annual Statement application solo, end to end: Glue batch processing with reconciliation workflows and a phased rollout that scaled from 30K to 1M+ customers with zero production issues; awarded the India Star Award",
      "Cut a Glue pipeline's output from roughly 100K small JSON files to about 100 through two-tier file merging, sharply reducing S3 request and downstream processing overhead; the pattern was adopted by other teams",
      "Extended the Statement History REST API with DynamoDB-backed time-range queries, deployed on ECS behind API Gateway and ALB to serve millions of consumer requests"
    ],
    tech: ["AWS", "Python", "Java", "Glue", "DynamoDB", "SQS", "S3", "ECS", "API Gateway"]
  },
  {
    id: 3,
    company: "Bikayi Inc.",
    role: "Software Engineer",
    duration: "March 2022 - Sept 2022",
    location: "Bangalore, India",
    responsibilities: [
      "Led frontend development for key pages, increasing user engagement by 25%",
      "Ensured accurate backend data processing through comprehensive input data analysis"
    ],
    tech: ["React", "JavaScript", "Node.js", "REST APIs"]
  }
];

export const educationData = {
  institution: "PCCOE (University of Pune)",
  degree: "BE in EnTC",
  gpa: "9.58/10",
  duration: "May 2018 - May 2022"
};