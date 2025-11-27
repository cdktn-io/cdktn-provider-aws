# `lambdaEventSourceMapping` Submodule <a name="`lambdaEventSourceMapping` Submodule" id="@cdktf/provider-aws.lambdaEventSourceMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventSourceMapping <a name="LambdaEventSourceMapping" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig = None,
  batch_size: typing.Union[int, float] = None,
  bisect_batch_on_function_error: bool | IResolvable = None,
  destination_config: LambdaEventSourceMappingDestinationConfig = None,
  document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfig = None,
  enabled: bool | IResolvable = None,
  event_source_arn: str = None,
  filter_criteria: LambdaEventSourceMappingFilterCriteria = None,
  function_response_types: typing.List[str] = None,
  id: str = None,
  kms_key_arn: str = None,
  maximum_batching_window_in_seconds: typing.Union[int, float] = None,
  maximum_record_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None,
  metrics_config: LambdaEventSourceMappingMetricsConfig = None,
  parallelization_factor: typing.Union[int, float] = None,
  provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfig = None,
  queues: typing.List[str] = None,
  region: str = None,
  scaling_config: LambdaEventSourceMappingScalingConfig = None,
  self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSource = None,
  self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig = None,
  source_access_configuration: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfiguration] = None,
  starting_position: str = None,
  starting_position_timestamp: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  topics: typing.List[str] = None,
  tumbling_window_in_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.amazonManagedKafkaEventSourceConfig">amazon_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | amazon_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.bisectBatchOnFunctionError">bisect_batch_on_function_error</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.destinationConfig">destination_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.documentDbEventSourceConfig">document_db_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | document_db_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.eventSourceArn">event_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | filter_criteria block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionResponseTypes">function_response_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumBatchingWindowInSeconds">maximum_batching_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRecordAgeInSeconds">maximum_record_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.parallelizationFactor">parallelization_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisionedPollerConfig">provisioned_poller_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | provisioned_poller_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.queues">queues</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedEventSource">self_managed_event_source</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | self_managed_event_source block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedKafkaEventSourceConfig">self_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | self_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.sourceAccessConfiguration">source_access_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]</code> | source_access_configuration block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPosition">starting_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPositionTimestamp">starting_position_timestamp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.topics">topics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tumblingWindowInSeconds">tumbling_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}.

---

##### `amazon_managed_kafka_event_source_config`<sup>Optional</sup> <a name="amazon_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.amazonManagedKafkaEventSourceConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

amazon_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}.

---

##### `bisect_batch_on_function_error`<sup>Optional</sup> <a name="bisect_batch_on_function_error" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.bisectBatchOnFunctionError"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}.

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `document_db_event_source_config`<sup>Optional</sup> <a name="document_db_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.documentDbEventSourceConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

document_db_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}.

---

##### `event_source_arn`<sup>Optional</sup> <a name="event_source_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.eventSourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}.

---

##### `filter_criteria`<sup>Optional</sup> <a name="filter_criteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.filterCriteria"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `function_response_types`<sup>Optional</sup> <a name="function_response_types" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionResponseTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}.

---

##### `maximum_batching_window_in_seconds`<sup>Optional</sup> <a name="maximum_batching_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumBatchingWindowInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}.

---

##### `maximum_record_age_in_seconds`<sup>Optional</sup> <a name="maximum_record_age_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRecordAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}.

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}.

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.metricsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}

---

##### `parallelization_factor`<sup>Optional</sup> <a name="parallelization_factor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.parallelizationFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}.

---

##### `provisioned_poller_config`<sup>Optional</sup> <a name="provisioned_poller_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisionedPollerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

provisioned_poller_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}

---

##### `queues`<sup>Optional</sup> <a name="queues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.queues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#region LambdaEventSourceMapping#region}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `self_managed_event_source`<sup>Optional</sup> <a name="self_managed_event_source" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedEventSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

self_managed_event_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `self_managed_kafka_event_source_config`<sup>Optional</sup> <a name="self_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedKafkaEventSourceConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

self_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `source_access_configuration`<sup>Optional</sup> <a name="source_access_configuration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.sourceAccessConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]

source_access_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#source_access_configuration LambdaEventSourceMapping#source_access_configuration}

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPosition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}.

---

##### `starting_position_timestamp`<sup>Optional</sup> <a name="starting_position_timestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPositionTimestamp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}.

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.topics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}.

---

##### `tumbling_window_in_seconds`<sup>Optional</sup> <a name="tumbling_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tumblingWindowInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig">put_amazon_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig">put_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig">put_document_db_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria">put_filter_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig">put_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig">put_provisioned_poller_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig">put_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource">put_self_managed_event_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig">put_self_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration">put_source_access_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig">reset_amazon_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError">reset_bisect_batch_on_function_error</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig">reset_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig">reset_document_db_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn">reset_event_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria">reset_filter_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes">reset_function_response_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds">reset_maximum_batching_window_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds">reset_maximum_record_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig">reset_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor">reset_parallelization_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig">reset_provisioned_poller_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues">reset_queues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig">reset_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource">reset_self_managed_event_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig">reset_self_managed_kafka_event_source_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfiguration">reset_source_access_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition">reset_starting_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp">reset_starting_position_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics">reset_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds">reset_tumbling_window_in_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_amazon_managed_kafka_event_source_config` <a name="put_amazon_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig"></a>

```python
def put_amazon_managed_kafka_event_source_config(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig = None
) -> None
```

###### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig.parameter.consumerGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

###### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig.parameter.schemaRegistryConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

schema_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

##### `put_destination_config` <a name="put_destination_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig"></a>

```python
def put_destination_config(
  on_failure: LambdaEventSourceMappingDestinationConfigOnFailure = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig.parameter.onFailure"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}

---

##### `put_document_db_event_source_config` <a name="put_document_db_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig"></a>

```python
def put_document_db_event_source_config(
  database_name: str,
  collection_name: str = None,
  full_document: str = None
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}.

---

###### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.collectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}.

---

###### `full_document`<sup>Optional</sup> <a name="full_document" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.fullDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}.

---

##### `put_filter_criteria` <a name="put_filter_criteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria"></a>

```python
def put_filter_criteria(
  filter: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilter] = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria.parameter.filter"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#filter LambdaEventSourceMapping#filter}

---

##### `put_metrics_config` <a name="put_metrics_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig"></a>

```python
def put_metrics_config(
  metrics: typing.List[str]
) -> None
```

###### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig.parameter.metrics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}.

---

##### `put_provisioned_poller_config` <a name="put_provisioned_poller_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig"></a>

```python
def put_provisioned_poller_config(
  maximum_pollers: typing.Union[int, float] = None,
  minimum_pollers: typing.Union[int, float] = None
) -> None
```

###### `maximum_pollers`<sup>Optional</sup> <a name="maximum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig.parameter.maximumPollers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}.

---

###### `minimum_pollers`<sup>Optional</sup> <a name="minimum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig.parameter.minimumPollers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}.

---

##### `put_scaling_config` <a name="put_scaling_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig"></a>

```python
def put_scaling_config(
  maximum_concurrency: typing.Union[int, float] = None
) -> None
```

###### `maximum_concurrency`<sup>Optional</sup> <a name="maximum_concurrency" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig.parameter.maximumConcurrency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}.

---

##### `put_self_managed_event_source` <a name="put_self_managed_event_source" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource"></a>

```python
def put_self_managed_event_source(
  endpoints: typing.Mapping[str]
) -> None
```

###### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource.parameter.endpoints"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}.

---

##### `put_self_managed_kafka_event_source_config` <a name="put_self_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig"></a>

```python
def put_self_managed_kafka_event_source_config(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig = None
) -> None
```

###### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig.parameter.consumerGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

###### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig.parameter.schemaRegistryConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

schema_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

##### `put_source_access_configuration` <a name="put_source_access_configuration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration"></a>

```python
def put_source_access_configuration(
  value: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]

---

##### `reset_amazon_managed_kafka_event_source_config` <a name="reset_amazon_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig"></a>

```python
def reset_amazon_managed_kafka_event_source_config() -> None
```

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_bisect_batch_on_function_error` <a name="reset_bisect_batch_on_function_error" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError"></a>

```python
def reset_bisect_batch_on_function_error() -> None
```

##### `reset_destination_config` <a name="reset_destination_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig"></a>

```python
def reset_destination_config() -> None
```

##### `reset_document_db_event_source_config` <a name="reset_document_db_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig"></a>

```python
def reset_document_db_event_source_config() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_source_arn` <a name="reset_event_source_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn"></a>

```python
def reset_event_source_arn() -> None
```

##### `reset_filter_criteria` <a name="reset_filter_criteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria"></a>

```python
def reset_filter_criteria() -> None
```

##### `reset_function_response_types` <a name="reset_function_response_types" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes"></a>

```python
def reset_function_response_types() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_maximum_batching_window_in_seconds` <a name="reset_maximum_batching_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds"></a>

```python
def reset_maximum_batching_window_in_seconds() -> None
```

##### `reset_maximum_record_age_in_seconds` <a name="reset_maximum_record_age_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds"></a>

```python
def reset_maximum_record_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```

##### `reset_metrics_config` <a name="reset_metrics_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig"></a>

```python
def reset_metrics_config() -> None
```

##### `reset_parallelization_factor` <a name="reset_parallelization_factor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor"></a>

```python
def reset_parallelization_factor() -> None
```

##### `reset_provisioned_poller_config` <a name="reset_provisioned_poller_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig"></a>

```python
def reset_provisioned_poller_config() -> None
```

##### `reset_queues` <a name="reset_queues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues"></a>

```python
def reset_queues() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scaling_config` <a name="reset_scaling_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig"></a>

```python
def reset_scaling_config() -> None
```

##### `reset_self_managed_event_source` <a name="reset_self_managed_event_source" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource"></a>

```python
def reset_self_managed_event_source() -> None
```

##### `reset_self_managed_kafka_event_source_config` <a name="reset_self_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig"></a>

```python
def reset_self_managed_kafka_event_source_config() -> None
```

##### `reset_source_access_configuration` <a name="reset_source_access_configuration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfiguration"></a>

```python
def reset_source_access_configuration() -> None
```

##### `reset_starting_position` <a name="reset_starting_position" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition"></a>

```python
def reset_starting_position() -> None
```

##### `reset_starting_position_timestamp` <a name="reset_starting_position_timestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp"></a>

```python
def reset_starting_position_timestamp() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_topics` <a name="reset_topics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics"></a>

```python
def reset_topics() -> None
```

##### `reset_tumbling_window_in_seconds` <a name="reset_tumbling_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds"></a>

```python
def reset_tumbling_window_in_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LambdaEventSourceMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LambdaEventSourceMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaEventSourceMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaEventSourceMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaEventSourceMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig">amazon_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig">document_db_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastProcessingResult">last_processing_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig">provisioned_poller_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource">self_managed_event_source</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig">self_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfiguration">source_access_configuration</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList">LambdaEventSourceMappingSourceAccessConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.stateTransitionReason">state_transition_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput">amazon_managed_kafka_event_source_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput">bisect_batch_on_function_error_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput">destination_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput">document_db_event_source_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput">event_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput">filter_criteria_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput">function_response_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput">maximum_batching_window_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput">maximum_record_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput">metrics_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput">parallelization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput">provisioned_poller_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput">queues_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput">scaling_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput">self_managed_event_source_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput">self_managed_kafka_event_source_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationInput">source_access_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput">starting_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput">starting_position_timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput">topics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput">tumbling_window_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError">bisect_batch_on_function_error</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn">event_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes">function_response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds">maximum_batching_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds">maximum_record_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor">parallelization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues">queues</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition">starting_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp">starting_position_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics">topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds">tumbling_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `amazon_managed_kafka_event_source_config`<sup>Required</sup> <a name="amazon_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig"></a>

```python
amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_config`<sup>Required</sup> <a name="destination_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig"></a>

```python
destination_config: LambdaEventSourceMappingDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a>

---

##### `document_db_event_source_config`<sup>Required</sup> <a name="document_db_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig"></a>

```python
document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a>

---

##### `filter_criteria`<sup>Required</sup> <a name="filter_criteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria"></a>

```python
filter_criteria: LambdaEventSourceMappingFilterCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a>

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `last_processing_result`<sup>Required</sup> <a name="last_processing_result" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastProcessingResult"></a>

```python
last_processing_result: str
```

- *Type:* str

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig"></a>

```python
metrics_config: LambdaEventSourceMappingMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a>

---

##### `provisioned_poller_config`<sup>Required</sup> <a name="provisioned_poller_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig"></a>

```python
provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig"></a>

```python
scaling_config: LambdaEventSourceMappingScalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a>

---

##### `self_managed_event_source`<sup>Required</sup> <a name="self_managed_event_source" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource"></a>

```python
self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a>

---

##### `self_managed_kafka_event_source_config`<sup>Required</sup> <a name="self_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig"></a>

```python
self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a>

---

##### `source_access_configuration`<sup>Required</sup> <a name="source_access_configuration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfiguration"></a>

```python
source_access_configuration: LambdaEventSourceMappingSourceAccessConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList">LambdaEventSourceMappingSourceAccessConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_transition_reason`<sup>Required</sup> <a name="state_transition_reason" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.stateTransitionReason"></a>

```python
state_transition_reason: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `amazon_managed_kafka_event_source_config_input`<sup>Optional</sup> <a name="amazon_managed_kafka_event_source_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput"></a>

```python
amazon_managed_kafka_event_source_config_input: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bisect_batch_on_function_error_input`<sup>Optional</sup> <a name="bisect_batch_on_function_error_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput"></a>

```python
bisect_batch_on_function_error_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `destination_config_input`<sup>Optional</sup> <a name="destination_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput"></a>

```python
destination_config_input: LambdaEventSourceMappingDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `document_db_event_source_config_input`<sup>Optional</sup> <a name="document_db_event_source_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput"></a>

```python
document_db_event_source_config_input: LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event_source_arn_input`<sup>Optional</sup> <a name="event_source_arn_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput"></a>

```python
event_source_arn_input: str
```

- *Type:* str

---

##### `filter_criteria_input`<sup>Optional</sup> <a name="filter_criteria_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput"></a>

```python
filter_criteria_input: LambdaEventSourceMappingFilterCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_response_types_input`<sup>Optional</sup> <a name="function_response_types_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput"></a>

```python
function_response_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `maximum_batching_window_in_seconds_input`<sup>Optional</sup> <a name="maximum_batching_window_in_seconds_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput"></a>

```python
maximum_batching_window_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_record_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_record_age_in_seconds_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput"></a>

```python
maximum_record_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_config_input`<sup>Optional</sup> <a name="metrics_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput"></a>

```python
metrics_config_input: LambdaEventSourceMappingMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---

##### `parallelization_factor_input`<sup>Optional</sup> <a name="parallelization_factor_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput"></a>

```python
parallelization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_poller_config_input`<sup>Optional</sup> <a name="provisioned_poller_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput"></a>

```python
provisioned_poller_config_input: LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---

##### `queues_input`<sup>Optional</sup> <a name="queues_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput"></a>

```python
queues_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scaling_config_input`<sup>Optional</sup> <a name="scaling_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput"></a>

```python
scaling_config_input: LambdaEventSourceMappingScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `self_managed_event_source_input`<sup>Optional</sup> <a name="self_managed_event_source_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput"></a>

```python
self_managed_event_source_input: LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `self_managed_kafka_event_source_config_input`<sup>Optional</sup> <a name="self_managed_kafka_event_source_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput"></a>

```python
self_managed_kafka_event_source_config_input: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `source_access_configuration_input`<sup>Optional</sup> <a name="source_access_configuration_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationInput"></a>

```python
source_access_configuration_input: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]

---

##### `starting_position_input`<sup>Optional</sup> <a name="starting_position_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput"></a>

```python
starting_position_input: str
```

- *Type:* str

---

##### `starting_position_timestamp_input`<sup>Optional</sup> <a name="starting_position_timestamp_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput"></a>

```python
starting_position_timestamp_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `topics_input`<sup>Optional</sup> <a name="topics_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput"></a>

```python
topics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tumbling_window_in_seconds_input`<sup>Optional</sup> <a name="tumbling_window_in_seconds_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput"></a>

```python
tumbling_window_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bisect_batch_on_function_error`<sup>Required</sup> <a name="bisect_batch_on_function_error" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError"></a>

```python
bisect_batch_on_function_error: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event_source_arn`<sup>Required</sup> <a name="event_source_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn"></a>

```python
event_source_arn: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `function_response_types`<sup>Required</sup> <a name="function_response_types" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes"></a>

```python
function_response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `maximum_batching_window_in_seconds`<sup>Required</sup> <a name="maximum_batching_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

```python
maximum_batching_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_record_age_in_seconds`<sup>Required</sup> <a name="maximum_record_age_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

```python
maximum_record_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parallelization_factor`<sup>Required</sup> <a name="parallelization_factor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor"></a>

```python
parallelization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues"></a>

```python
queues: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `starting_position`<sup>Required</sup> <a name="starting_position" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

---

##### `starting_position_timestamp`<sup>Required</sup> <a name="starting_position_timestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp"></a>

```python
starting_position_timestamp: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tumbling_window_in_seconds`<sup>Required</sup> <a name="tumbling_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds"></a>

```python
tumbling_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | schema_registry_config block. |

---

##### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

##### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

schema_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig(
  access_config: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_config: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig">access_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]</code> | access_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig">schema_validation_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]</code> | schema_validation_config block. |

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig"></a>

```python
access_config: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#access_config LambdaEventSourceMapping#access_config}

---

##### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}.

---

##### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}.

---

##### `schema_validation_config`<sup>Optional</sup> <a name="schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig"></a>

```python
schema_validation_config: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

schema_validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_validation_config LambdaEventSourceMapping#schema_validation_config}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig(
  type: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}.

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig(
  attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}.

---

### LambdaEventSourceMappingConfig <a name="LambdaEventSourceMappingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig = None,
  batch_size: typing.Union[int, float] = None,
  bisect_batch_on_function_error: bool | IResolvable = None,
  destination_config: LambdaEventSourceMappingDestinationConfig = None,
  document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfig = None,
  enabled: bool | IResolvable = None,
  event_source_arn: str = None,
  filter_criteria: LambdaEventSourceMappingFilterCriteria = None,
  function_response_types: typing.List[str] = None,
  id: str = None,
  kms_key_arn: str = None,
  maximum_batching_window_in_seconds: typing.Union[int, float] = None,
  maximum_record_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None,
  metrics_config: LambdaEventSourceMappingMetricsConfig = None,
  parallelization_factor: typing.Union[int, float] = None,
  provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfig = None,
  queues: typing.List[str] = None,
  region: str = None,
  scaling_config: LambdaEventSourceMappingScalingConfig = None,
  self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSource = None,
  self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig = None,
  source_access_configuration: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfiguration] = None,
  starting_position: str = None,
  starting_position_timestamp: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  topics: typing.List[str] = None,
  tumbling_window_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig">amazon_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | amazon_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError">bisect_batch_on_function_error</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig">document_db_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | document_db_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn">event_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | filter_criteria block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes">function_response_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds">maximum_batching_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds">maximum_record_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor">parallelization_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig">provisioned_poller_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | provisioned_poller_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues">queues</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource">self_managed_event_source</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | self_managed_event_source block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig">self_managed_kafka_event_source_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | self_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfiguration">source_access_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]</code> | source_access_configuration block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition">starting_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp">starting_position_timestamp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics">topics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds">tumbling_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}.

---

##### `amazon_managed_kafka_event_source_config`<sup>Optional</sup> <a name="amazon_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig"></a>

```python
amazon_managed_kafka_event_source_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

amazon_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}.

---

##### `bisect_batch_on_function_error`<sup>Optional</sup> <a name="bisect_batch_on_function_error" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError"></a>

```python
bisect_batch_on_function_error: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}.

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig"></a>

```python
destination_config: LambdaEventSourceMappingDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `document_db_event_source_config`<sup>Optional</sup> <a name="document_db_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig"></a>

```python
document_db_event_source_config: LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

document_db_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}.

---

##### `event_source_arn`<sup>Optional</sup> <a name="event_source_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn"></a>

```python
event_source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}.

---

##### `filter_criteria`<sup>Optional</sup> <a name="filter_criteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria"></a>

```python
filter_criteria: LambdaEventSourceMappingFilterCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `function_response_types`<sup>Optional</sup> <a name="function_response_types" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes"></a>

```python
function_response_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}.

---

##### `maximum_batching_window_in_seconds`<sup>Optional</sup> <a name="maximum_batching_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds"></a>

```python
maximum_batching_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}.

---

##### `maximum_record_age_in_seconds`<sup>Optional</sup> <a name="maximum_record_age_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds"></a>

```python
maximum_record_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}.

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}.

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig"></a>

```python
metrics_config: LambdaEventSourceMappingMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}

---

##### `parallelization_factor`<sup>Optional</sup> <a name="parallelization_factor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor"></a>

```python
parallelization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}.

---

##### `provisioned_poller_config`<sup>Optional</sup> <a name="provisioned_poller_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig"></a>

```python
provisioned_poller_config: LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

provisioned_poller_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}

---

##### `queues`<sup>Optional</sup> <a name="queues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues"></a>

```python
queues: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#region LambdaEventSourceMapping#region}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig"></a>

```python
scaling_config: LambdaEventSourceMappingScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `self_managed_event_source`<sup>Optional</sup> <a name="self_managed_event_source" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource"></a>

```python
self_managed_event_source: LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

self_managed_event_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `self_managed_kafka_event_source_config`<sup>Optional</sup> <a name="self_managed_kafka_event_source_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig"></a>

```python
self_managed_kafka_event_source_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

self_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `source_access_configuration`<sup>Optional</sup> <a name="source_access_configuration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfiguration"></a>

```python
source_access_configuration: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]

source_access_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#source_access_configuration LambdaEventSourceMapping#source_access_configuration}

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}.

---

##### `starting_position_timestamp`<sup>Optional</sup> <a name="starting_position_timestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp"></a>

```python
starting_position_timestamp: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}.

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}.

---

##### `tumbling_window_in_seconds`<sup>Optional</sup> <a name="tumbling_window_in_seconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds"></a>

```python
tumbling_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}.

---

### LambdaEventSourceMappingDestinationConfig <a name="LambdaEventSourceMappingDestinationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig(
  on_failure: LambdaEventSourceMappingDestinationConfigOnFailure = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | on_failure block. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure"></a>

```python
on_failure: LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}

---

### LambdaEventSourceMappingDestinationConfigOnFailure <a name="LambdaEventSourceMappingDestinationConfigOnFailure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure(
  destination_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destinationArn">destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}. |

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}.

---

### LambdaEventSourceMappingDocumentDbEventSourceConfig <a name="LambdaEventSourceMappingDocumentDbEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig(
  database_name: str,
  collection_name: str = None,
  full_document: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument">full_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}.

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}.

---

##### `full_document`<sup>Optional</sup> <a name="full_document" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument"></a>

```python
full_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}.

---

### LambdaEventSourceMappingFilterCriteria <a name="LambdaEventSourceMappingFilterCriteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria(
  filter: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilter] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filter"></a>

```python
filter: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#filter LambdaEventSourceMapping#filter}

---

### LambdaEventSourceMappingFilterCriteriaFilter <a name="LambdaEventSourceMappingFilterCriteriaFilter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter(
  pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}. |

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}.

---

### LambdaEventSourceMappingMetricsConfig <a name="LambdaEventSourceMappingMetricsConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig(
  metrics: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}. |

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}.

---

### LambdaEventSourceMappingProvisionedPollerConfig <a name="LambdaEventSourceMappingProvisionedPollerConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig(
  maximum_pollers: typing.Union[int, float] = None,
  minimum_pollers: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers">maximum_pollers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers">minimum_pollers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}. |

---

##### `maximum_pollers`<sup>Optional</sup> <a name="maximum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers"></a>

```python
maximum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}.

---

##### `minimum_pollers`<sup>Optional</sup> <a name="minimum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers"></a>

```python
minimum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}.

---

### LambdaEventSourceMappingScalingConfig <a name="LambdaEventSourceMappingScalingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig(
  maximum_concurrency: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency">maximum_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}. |

---

##### `maximum_concurrency`<sup>Optional</sup> <a name="maximum_concurrency" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency"></a>

```python
maximum_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}.

---

### LambdaEventSourceMappingSelfManagedEventSource <a name="LambdaEventSourceMappingSelfManagedEventSource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource(
  endpoints: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints">endpoints</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints"></a>

```python
endpoints: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}.

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig(
  consumer_group_id: str = None,
  schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | schema_registry_config block. |

---

##### `consumer_group_id`<sup>Optional</sup> <a name="consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

##### `schema_registry_config`<sup>Optional</sup> <a name="schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

schema_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig(
  access_config: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_config: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig">access_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]</code> | access_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig">schema_validation_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]</code> | schema_validation_config block. |

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig"></a>

```python
access_config: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#access_config LambdaEventSourceMapping#access_config}

---

##### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}.

---

##### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}.

---

##### `schema_validation_config`<sup>Optional</sup> <a name="schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig"></a>

```python
schema_validation_config: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

schema_validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_validation_config LambdaEventSourceMapping#schema_validation_config}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig(
  type: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}.

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig(
  attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}.

---

### LambdaEventSourceMappingSourceAccessConfiguration <a name="LambdaEventSourceMappingSourceAccessConfiguration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration(
  type: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">put_schema_registry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">reset_consumer_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">reset_schema_registry_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_registry_config` <a name="put_schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```python
def put_schema_registry_config(
  access_config: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_config: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig] = None
) -> None
```

###### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.accessConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#access_config LambdaEventSourceMapping#access_config}

---

###### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.eventRecordFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}.

---

###### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaRegistryUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}.

---

###### `schema_validation_config`<sup>Optional</sup> <a name="schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaValidationConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

schema_validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_validation_config LambdaEventSourceMapping#schema_validation_config}

---

##### `reset_consumer_group_id` <a name="reset_consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```python
def reset_consumer_group_id() -> None
```

##### `reset_schema_registry_config` <a name="reset_schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```python
def reset_schema_registry_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">consumer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">schema_registry_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_registry_config`<sup>Required</sup> <a name="schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `consumer_group_id_input`<sup>Optional</sup> <a name="consumer_group_id_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```python
consumer_group_id_input: str
```

- *Type:* str

---

##### `schema_registry_config_input`<sup>Optional</sup> <a name="schema_registry_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```python
schema_registry_config_input: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `consumer_group_id`<sup>Required</sup> <a name="consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig">put_schema_validation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig">reset_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">reset_event_record_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">reset_schema_registry_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig">reset_schema_validation_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig"></a>

```python
def put_access_config(
  value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

---

##### `put_schema_validation_config` <a name="put_schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig"></a>

```python
def put_schema_validation_config(
  value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

---

##### `reset_access_config` <a name="reset_access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig"></a>

```python
def reset_access_config() -> None
```

##### `reset_event_record_format` <a name="reset_event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```python
def reset_event_record_format() -> None
```

##### `reset_schema_registry_uri` <a name="reset_schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```python
def reset_schema_registry_uri() -> None
```

##### `reset_schema_validation_config` <a name="reset_schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig"></a>

```python
def reset_schema_validation_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig">schema_validation_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput">access_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">event_record_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">schema_registry_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput">schema_validation_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig"></a>

```python
access_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a>

---

##### `schema_validation_config`<sup>Required</sup> <a name="schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig"></a>

```python
schema_validation_config: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a>

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput"></a>

```python
access_config_input: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

---

##### `event_record_format_input`<sup>Optional</sup> <a name="event_record_format_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```python
event_record_format_input: str
```

- *Type:* str

---

##### `schema_registry_uri_input`<sup>Optional</sup> <a name="schema_registry_uri_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```python
schema_registry_uri_input: str
```

- *Type:* str

---

##### `schema_validation_config_input`<sup>Optional</sup> <a name="schema_validation_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput"></a>

```python
schema_validation_config_input: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

---

##### `event_record_format`<sup>Required</sup> <a name="event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

---

##### `schema_registry_uri`<sup>Required</sup> <a name="schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>

---


### LambdaEventSourceMappingDestinationConfigOnFailureOutputReference <a name="LambdaEventSourceMappingDestinationConfigOnFailureOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---


### LambdaEventSourceMappingDestinationConfigOutputReference <a name="LambdaEventSourceMappingDestinationConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  destination_arn: str
) -> None
```

###### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure.parameter.destinationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}.

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput">on_failure_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure"></a>

```python
on_failure: LambdaEventSourceMappingDestinationConfigOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput"></a>

```python
on_failure_input: LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---


### LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference <a name="LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName">reset_collection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument">reset_full_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_collection_name` <a name="reset_collection_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName"></a>

```python
def reset_collection_name() -> None
```

##### `reset_full_document` <a name="reset_full_document" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument"></a>

```python
def reset_full_document() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput">full_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument">full_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `full_document_input`<sup>Optional</sup> <a name="full_document_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput"></a>

```python
full_document_input: str
```

- *Type:* str

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `full_document`<sup>Required</sup> <a name="full_document" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument"></a>

```python
full_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---


### LambdaEventSourceMappingFilterCriteriaFilterList <a name="LambdaEventSourceMappingFilterCriteriaFilterList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingFilterCriteriaFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]

---


### LambdaEventSourceMappingFilterCriteriaFilterOutputReference <a name="LambdaEventSourceMappingFilterCriteriaFilterOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingFilterCriteriaFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>

---


### LambdaEventSourceMappingFilterCriteriaOutputReference <a name="LambdaEventSourceMappingFilterCriteriaOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList">LambdaEventSourceMappingFilterCriteriaFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filter"></a>

```python
filter: LambdaEventSourceMappingFilterCriteriaFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList">LambdaEventSourceMappingFilterCriteriaFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[LambdaEventSourceMappingFilterCriteriaFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingFilterCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---


### LambdaEventSourceMappingMetricsConfigOutputReference <a name="LambdaEventSourceMappingMetricsConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput">metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput"></a>

```python
metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---


### LambdaEventSourceMappingProvisionedPollerConfigOutputReference <a name="LambdaEventSourceMappingProvisionedPollerConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers">reset_maximum_pollers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers">reset_minimum_pollers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_pollers` <a name="reset_maximum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers"></a>

```python
def reset_maximum_pollers() -> None
```

##### `reset_minimum_pollers` <a name="reset_minimum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers"></a>

```python
def reset_minimum_pollers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput">maximum_pollers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput">minimum_pollers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers">maximum_pollers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers">minimum_pollers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_pollers_input`<sup>Optional</sup> <a name="maximum_pollers_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput"></a>

```python
maximum_pollers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_pollers_input`<sup>Optional</sup> <a name="minimum_pollers_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput"></a>

```python
minimum_pollers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_pollers`<sup>Required</sup> <a name="maximum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers"></a>

```python
maximum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_pollers`<sup>Required</sup> <a name="minimum_pollers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers"></a>

```python
minimum_pollers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---


### LambdaEventSourceMappingScalingConfigOutputReference <a name="LambdaEventSourceMappingScalingConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency">reset_maximum_concurrency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_concurrency` <a name="reset_maximum_concurrency" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency"></a>

```python
def reset_maximum_concurrency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput">maximum_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency">maximum_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_concurrency_input`<sup>Optional</sup> <a name="maximum_concurrency_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput"></a>

```python
maximum_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_concurrency`<sup>Required</sup> <a name="maximum_concurrency" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency"></a>

```python
maximum_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---


### LambdaEventSourceMappingSelfManagedEventSourceOutputReference <a name="LambdaEventSourceMappingSelfManagedEventSourceOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput">endpoints_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints">endpoints</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput"></a>

```python
endpoints_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints"></a>

```python
endpoints: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">put_schema_registry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">reset_consumer_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">reset_schema_registry_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_registry_config` <a name="put_schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```python
def put_schema_registry_config(
  access_config: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig] = None,
  event_record_format: str = None,
  schema_registry_uri: str = None,
  schema_validation_config: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig] = None
) -> None
```

###### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.accessConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#access_config LambdaEventSourceMapping#access_config}

---

###### `event_record_format`<sup>Optional</sup> <a name="event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.eventRecordFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}.

---

###### `schema_registry_uri`<sup>Optional</sup> <a name="schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaRegistryUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}.

---

###### `schema_validation_config`<sup>Optional</sup> <a name="schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.schemaValidationConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

schema_validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lambda_event_source_mapping#schema_validation_config LambdaEventSourceMapping#schema_validation_config}

---

##### `reset_consumer_group_id` <a name="reset_consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```python
def reset_consumer_group_id() -> None
```

##### `reset_schema_registry_config` <a name="reset_schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```python
def reset_schema_registry_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">schema_registry_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">consumer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">schema_registry_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_registry_config`<sup>Required</sup> <a name="schema_registry_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```python
schema_registry_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `consumer_group_id_input`<sup>Optional</sup> <a name="consumer_group_id_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```python
consumer_group_id_input: str
```

- *Type:* str

---

##### `schema_registry_config_input`<sup>Optional</sup> <a name="schema_registry_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```python
schema_registry_config_input: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `consumer_group_id`<sup>Required</sup> <a name="consumer_group_id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```python
consumer_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig">put_schema_validation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig">reset_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">reset_event_record_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">reset_schema_registry_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig">reset_schema_validation_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig"></a>

```python
def put_access_config(
  value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

---

##### `put_schema_validation_config` <a name="put_schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig"></a>

```python
def put_schema_validation_config(
  value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

---

##### `reset_access_config` <a name="reset_access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig"></a>

```python
def reset_access_config() -> None
```

##### `reset_event_record_format` <a name="reset_event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```python
def reset_event_record_format() -> None
```

##### `reset_schema_registry_uri` <a name="reset_schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```python
def reset_schema_registry_uri() -> None
```

##### `reset_schema_validation_config` <a name="reset_schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig"></a>

```python
def reset_schema_validation_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig">schema_validation_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput">access_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">event_record_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">schema_registry_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput">schema_validation_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">event_record_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">schema_registry_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig"></a>

```python
access_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a>

---

##### `schema_validation_config`<sup>Required</sup> <a name="schema_validation_config" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig"></a>

```python
schema_validation_config: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a>

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput"></a>

```python
access_config_input: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig</a>]

---

##### `event_record_format_input`<sup>Optional</sup> <a name="event_record_format_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```python
event_record_format_input: str
```

- *Type:* str

---

##### `schema_registry_uri_input`<sup>Optional</sup> <a name="schema_registry_uri_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```python
schema_registry_uri_input: str
```

- *Type:* str

---

##### `schema_validation_config_input`<sup>Optional</sup> <a name="schema_validation_config_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput"></a>

```python
schema_validation_config_input: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

---

##### `event_record_format`<sup>Required</sup> <a name="event_record_format" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```python
event_record_format: str
```

- *Type:* str

---

##### `schema_registry_uri`<sup>Required</sup> <a name="schema_registry_uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```python
schema_registry_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>]

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig</a>

---


### LambdaEventSourceMappingSourceAccessConfigurationList <a name="LambdaEventSourceMappingSourceAccessConfigurationList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaEventSourceMappingSourceAccessConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaEventSourceMappingSourceAccessConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>]

---


### LambdaEventSourceMappingSourceAccessConfigurationOutputReference <a name="LambdaEventSourceMappingSourceAccessConfigurationOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_event_source_mapping

lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventSourceMappingSourceAccessConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>

---



