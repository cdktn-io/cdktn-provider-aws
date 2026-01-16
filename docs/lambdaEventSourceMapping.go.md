# `lambdaEventSourceMapping` Submodule <a name="`lambdaEventSourceMapping` Submodule" id="@cdktn/provider-aws.lambdaEventSourceMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventSourceMapping <a name="LambdaEventSourceMapping" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMapping(scope Construct, id *string, config LambdaEventSourceMappingConfig) LambdaEventSourceMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig">LambdaEventSourceMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig">LambdaEventSourceMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig">PutAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig">PutDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig">PutDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria">PutFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig">PutProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig">PutScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource">PutSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig">PutSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration">PutSourceAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig">ResetAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError">ResetBisectBatchOnFunctionError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig">ResetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig">ResetDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn">ResetEventSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria">ResetFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes">ResetFunctionResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds">ResetMaximumBatchingWindowInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds">ResetMaximumRecordAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts">ResetMaximumRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor">ResetParallelizationFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig">ResetProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues">ResetQueues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig">ResetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource">ResetSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig">ResetSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfiguration">ResetSourceAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition">ResetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp">ResetStartingPositionTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds">ResetTumblingWindowInSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAmazonManagedKafkaEventSourceConfig` <a name="PutAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig"></a>

```go
func PutAmazonManagedKafkaEventSourceConfig(value LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `PutDestinationConfig` <a name="PutDestinationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig"></a>

```go
func PutDestinationConfig(value LambdaEventSourceMappingDestinationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `PutDocumentDbEventSourceConfig` <a name="PutDocumentDbEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig"></a>

```go
func PutDocumentDbEventSourceConfig(value LambdaEventSourceMappingDocumentDbEventSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDocumentDbEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---

##### `PutFilterCriteria` <a name="PutFilterCriteria" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria"></a>

```go
func PutFilterCriteria(value LambdaEventSourceMappingFilterCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `PutMetricsConfig` <a name="PutMetricsConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig"></a>

```go
func PutMetricsConfig(value LambdaEventSourceMappingMetricsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---

##### `PutProvisionedPollerConfig` <a name="PutProvisionedPollerConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig"></a>

```go
func PutProvisionedPollerConfig(value LambdaEventSourceMappingProvisionedPollerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putProvisionedPollerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---

##### `PutScalingConfig` <a name="PutScalingConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig"></a>

```go
func PutScalingConfig(value LambdaEventSourceMappingScalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `PutSelfManagedEventSource` <a name="PutSelfManagedEventSource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource"></a>

```go
func PutSelfManagedEventSource(value LambdaEventSourceMappingSelfManagedEventSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `PutSelfManagedKafkaEventSourceConfig` <a name="PutSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig"></a>

```go
func PutSelfManagedKafkaEventSourceConfig(value LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `PutSourceAccessConfiguration` <a name="PutSourceAccessConfiguration" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration"></a>

```go
func PutSourceAccessConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAmazonManagedKafkaEventSourceConfig` <a name="ResetAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig"></a>

```go
func ResetAmazonManagedKafkaEventSourceConfig()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetBisectBatchOnFunctionError` <a name="ResetBisectBatchOnFunctionError" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError"></a>

```go
func ResetBisectBatchOnFunctionError()
```

##### `ResetDestinationConfig` <a name="ResetDestinationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig"></a>

```go
func ResetDestinationConfig()
```

##### `ResetDocumentDbEventSourceConfig` <a name="ResetDocumentDbEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDocumentDbEventSourceConfig"></a>

```go
func ResetDocumentDbEventSourceConfig()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEventSourceArn` <a name="ResetEventSourceArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn"></a>

```go
func ResetEventSourceArn()
```

##### `ResetFilterCriteria` <a name="ResetFilterCriteria" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria"></a>

```go
func ResetFilterCriteria()
```

##### `ResetFunctionResponseTypes` <a name="ResetFunctionResponseTypes" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes"></a>

```go
func ResetFunctionResponseTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetMaximumBatchingWindowInSeconds` <a name="ResetMaximumBatchingWindowInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds"></a>

```go
func ResetMaximumBatchingWindowInSeconds()
```

##### `ResetMaximumRecordAgeInSeconds` <a name="ResetMaximumRecordAgeInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds"></a>

```go
func ResetMaximumRecordAgeInSeconds()
```

##### `ResetMaximumRetryAttempts` <a name="ResetMaximumRetryAttempts" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts"></a>

```go
func ResetMaximumRetryAttempts()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMetricsConfig"></a>

```go
func ResetMetricsConfig()
```

##### `ResetParallelizationFactor` <a name="ResetParallelizationFactor" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor"></a>

```go
func ResetParallelizationFactor()
```

##### `ResetProvisionedPollerConfig` <a name="ResetProvisionedPollerConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetProvisionedPollerConfig"></a>

```go
func ResetProvisionedPollerConfig()
```

##### `ResetQueues` <a name="ResetQueues" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues"></a>

```go
func ResetQueues()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScalingConfig` <a name="ResetScalingConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig"></a>

```go
func ResetScalingConfig()
```

##### `ResetSelfManagedEventSource` <a name="ResetSelfManagedEventSource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource"></a>

```go
func ResetSelfManagedEventSource()
```

##### `ResetSelfManagedKafkaEventSourceConfig` <a name="ResetSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig"></a>

```go
func ResetSelfManagedKafkaEventSourceConfig()
```

##### `ResetSourceAccessConfiguration` <a name="ResetSourceAccessConfiguration" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfiguration"></a>

```go
func ResetSourceAccessConfiguration()
```

##### `ResetStartingPosition` <a name="ResetStartingPosition" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition"></a>

```go
func ResetStartingPosition()
```

##### `ResetStartingPositionTimestamp` <a name="ResetStartingPositionTimestamp" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp"></a>

```go
func ResetStartingPositionTimestamp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics"></a>

```go
func ResetTopics()
```

##### `ResetTumblingWindowInSeconds` <a name="ResetTumblingWindowInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds"></a>

```go
func ResetTumblingWindowInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaEventSourceMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.LambdaEventSourceMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.LambdaEventSourceMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.LambdaEventSourceMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.LambdaEventSourceMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LambdaEventSourceMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaEventSourceMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaEventSourceMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LambdaEventSourceMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig">AmazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig">DocumentDbEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria">FilterCriteria</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastProcessingResult">LastProcessingResult</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig">ProvisionedPollerConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource">SelfManagedEventSource</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig">SelfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfiguration">SourceAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList">LambdaEventSourceMappingSourceAccessConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.stateTransitionReason">StateTransitionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput">AmazonManagedKafkaEventSourceConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput">BisectBatchOnFunctionErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput">DestinationConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput">DocumentDbEventSourceConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput">EventSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput">FilterCriteriaInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput">FunctionResponseTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput">MaximumBatchingWindowInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput">MaximumRecordAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput">MaximumRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput">MetricsConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput">ParallelizationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput">ProvisionedPollerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput">QueuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput">ScalingConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput">SelfManagedEventSourceInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput">SelfManagedKafkaEventSourceConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationInput">SourceAccessConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput">StartingPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput">StartingPositionTimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput">TopicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput">TumblingWindowInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError">BisectBatchOnFunctionError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn">EventSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes">FunctionResponseTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds">MaximumBatchingWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds">MaximumRecordAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor">ParallelizationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues">Queues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition">StartingPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp">StartingPositionTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics">Topics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds">TumblingWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AmazonManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="AmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig"></a>

```go
func AmazonManagedKafkaEventSourceConfig() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DestinationConfig`<sup>Required</sup> <a name="DestinationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig"></a>

```go
func DestinationConfig() LambdaEventSourceMappingDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a>

---

##### `DocumentDbEventSourceConfig`<sup>Required</sup> <a name="DocumentDbEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfig"></a>

```go
func DocumentDbEventSourceConfig() LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a>

---

##### `FilterCriteria`<sup>Required</sup> <a name="FilterCriteria" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria"></a>

```go
func FilterCriteria() LambdaEventSourceMappingFilterCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a>

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `LastProcessingResult`<sup>Required</sup> <a name="LastProcessingResult" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastProcessingResult"></a>

```go
func LastProcessingResult() *string
```

- *Type:* *string

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfig"></a>

```go
func MetricsConfig() LambdaEventSourceMappingMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference">LambdaEventSourceMappingMetricsConfigOutputReference</a>

---

##### `ProvisionedPollerConfig`<sup>Required</sup> <a name="ProvisionedPollerConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfig"></a>

```go
func ProvisionedPollerConfig() LambdaEventSourceMappingProvisionedPollerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference">LambdaEventSourceMappingProvisionedPollerConfigOutputReference</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig"></a>

```go
func ScalingConfig() LambdaEventSourceMappingScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a>

---

##### `SelfManagedEventSource`<sup>Required</sup> <a name="SelfManagedEventSource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource"></a>

```go
func SelfManagedEventSource() LambdaEventSourceMappingSelfManagedEventSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a>

---

##### `SelfManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="SelfManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig"></a>

```go
func SelfManagedKafkaEventSourceConfig() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a>

---

##### `SourceAccessConfiguration`<sup>Required</sup> <a name="SourceAccessConfiguration" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfiguration"></a>

```go
func SourceAccessConfiguration() LambdaEventSourceMappingSourceAccessConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList">LambdaEventSourceMappingSourceAccessConfigurationList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateTransitionReason`<sup>Required</sup> <a name="StateTransitionReason" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.stateTransitionReason"></a>

```go
func StateTransitionReason() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AmazonManagedKafkaEventSourceConfigInput`<sup>Optional</sup> <a name="AmazonManagedKafkaEventSourceConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput"></a>

```go
func AmazonManagedKafkaEventSourceConfigInput() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `BisectBatchOnFunctionErrorInput`<sup>Optional</sup> <a name="BisectBatchOnFunctionErrorInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput"></a>

```go
func BisectBatchOnFunctionErrorInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationConfigInput`<sup>Optional</sup> <a name="DestinationConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput"></a>

```go
func DestinationConfigInput() LambdaEventSourceMappingDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `DocumentDbEventSourceConfigInput`<sup>Optional</sup> <a name="DocumentDbEventSourceConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.documentDbEventSourceConfigInput"></a>

```go
func DocumentDbEventSourceConfigInput() LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventSourceArnInput`<sup>Optional</sup> <a name="EventSourceArnInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput"></a>

```go
func EventSourceArnInput() *string
```

- *Type:* *string

---

##### `FilterCriteriaInput`<sup>Optional</sup> <a name="FilterCriteriaInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput"></a>

```go
func FilterCriteriaInput() LambdaEventSourceMappingFilterCriteria
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `FunctionResponseTypesInput`<sup>Optional</sup> <a name="FunctionResponseTypesInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput"></a>

```go
func FunctionResponseTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `MaximumBatchingWindowInSecondsInput`<sup>Optional</sup> <a name="MaximumBatchingWindowInSecondsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput"></a>

```go
func MaximumBatchingWindowInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumRecordAgeInSecondsInput`<sup>Optional</sup> <a name="MaximumRecordAgeInSecondsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput"></a>

```go
func MaximumRecordAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumRetryAttemptsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput"></a>

```go
func MaximumRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.metricsConfigInput"></a>

```go
func MetricsConfigInput() LambdaEventSourceMappingMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---

##### `ParallelizationFactorInput`<sup>Optional</sup> <a name="ParallelizationFactorInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput"></a>

```go
func ParallelizationFactorInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedPollerConfigInput`<sup>Optional</sup> <a name="ProvisionedPollerConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisionedPollerConfigInput"></a>

```go
func ProvisionedPollerConfigInput() LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---

##### `QueuesInput`<sup>Optional</sup> <a name="QueuesInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput"></a>

```go
func QueuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScalingConfigInput`<sup>Optional</sup> <a name="ScalingConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput"></a>

```go
func ScalingConfigInput() LambdaEventSourceMappingScalingConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `SelfManagedEventSourceInput`<sup>Optional</sup> <a name="SelfManagedEventSourceInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput"></a>

```go
func SelfManagedEventSourceInput() LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `SelfManagedKafkaEventSourceConfigInput`<sup>Optional</sup> <a name="SelfManagedKafkaEventSourceConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput"></a>

```go
func SelfManagedKafkaEventSourceConfigInput() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `SourceAccessConfigurationInput`<sup>Optional</sup> <a name="SourceAccessConfigurationInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationInput"></a>

```go
func SourceAccessConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StartingPositionInput`<sup>Optional</sup> <a name="StartingPositionInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput"></a>

```go
func StartingPositionInput() *string
```

- *Type:* *string

---

##### `StartingPositionTimestampInput`<sup>Optional</sup> <a name="StartingPositionTimestampInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput"></a>

```go
func StartingPositionTimestampInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput"></a>

```go
func TopicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TumblingWindowInSecondsInput`<sup>Optional</sup> <a name="TumblingWindowInSecondsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput"></a>

```go
func TumblingWindowInSecondsInput() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `BisectBatchOnFunctionError`<sup>Required</sup> <a name="BisectBatchOnFunctionError" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError"></a>

```go
func BisectBatchOnFunctionError() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EventSourceArn`<sup>Required</sup> <a name="EventSourceArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn"></a>

```go
func EventSourceArn() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `FunctionResponseTypes`<sup>Required</sup> <a name="FunctionResponseTypes" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes"></a>

```go
func FunctionResponseTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `MaximumBatchingWindowInSeconds`<sup>Required</sup> <a name="MaximumBatchingWindowInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

```go
func MaximumBatchingWindowInSeconds() *f64
```

- *Type:* *f64

---

##### `MaximumRecordAgeInSeconds`<sup>Required</sup> <a name="MaximumRecordAgeInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

```go
func MaximumRecordAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts"></a>

```go
func MaximumRetryAttempts() *f64
```

- *Type:* *f64

---

##### `ParallelizationFactor`<sup>Required</sup> <a name="ParallelizationFactor" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor"></a>

```go
func ParallelizationFactor() *f64
```

- *Type:* *f64

---

##### `Queues`<sup>Required</sup> <a name="Queues" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues"></a>

```go
func Queues() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition"></a>

```go
func StartingPosition() *string
```

- *Type:* *string

---

##### `StartingPositionTimestamp`<sup>Required</sup> <a name="StartingPositionTimestamp" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp"></a>

```go
func StartingPositionTimestamp() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics"></a>

```go
func Topics() *[]*string
```

- *Type:* *[]*string

---

##### `TumblingWindowInSeconds`<sup>Required</sup> <a name="TumblingWindowInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds"></a>

```go
func TumblingWindowInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig {
	ConsumerGroupId: *string,
	SchemaRegistryConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId">ConsumerGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | schema_registry_config block. |

---

##### `ConsumerGroupId`<sup>Optional</sup> <a name="ConsumerGroupId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```go
ConsumerGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

##### `SchemaRegistryConfig`<sup>Optional</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```go
SchemaRegistryConfig LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

schema_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig {
	AccessConfig: interface{},
	EventRecordFormat: *string,
	SchemaRegistryUri: *string,
	SchemaValidationConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig">AccessConfig</a></code> | <code>interface{}</code> | access_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">EventRecordFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig">SchemaValidationConfig</a></code> | <code>interface{}</code> | schema_validation_config block. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig"></a>

```go
AccessConfig interface{}
```

- *Type:* interface{}

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#access_config LambdaEventSourceMapping#access_config}

---

##### `EventRecordFormat`<sup>Optional</sup> <a name="EventRecordFormat" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```go
EventRecordFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}.

---

##### `SchemaRegistryUri`<sup>Optional</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```go
SchemaRegistryUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}.

---

##### `SchemaValidationConfig`<sup>Optional</sup> <a name="SchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig"></a>

```go
SchemaValidationConfig interface{}
```

- *Type:* interface{}

schema_validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_validation_config LambdaEventSourceMapping#schema_validation_config}

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig {
	Type: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}.

---

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig {
	Attribute: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute">Attribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}.

---

### LambdaEventSourceMappingConfig <a name="LambdaEventSourceMappingConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionName: *string,
	AmazonManagedKafkaEventSourceConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig,
	BatchSize: *f64,
	BisectBatchOnFunctionError: interface{},
	DestinationConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig,
	DocumentDbEventSourceConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig,
	Enabled: interface{},
	EventSourceArn: *string,
	FilterCriteria: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria,
	FunctionResponseTypes: *[]*string,
	Id: *string,
	KmsKeyArn: *string,
	MaximumBatchingWindowInSeconds: *f64,
	MaximumRecordAgeInSeconds: *f64,
	MaximumRetryAttempts: *f64,
	MetricsConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig,
	ParallelizationFactor: *f64,
	ProvisionedPollerConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig,
	Queues: *[]*string,
	Region: *string,
	ScalingConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig,
	SelfManagedEventSource: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource,
	SelfManagedKafkaEventSourceConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig,
	SourceAccessConfiguration: interface{},
	StartingPosition: *string,
	StartingPositionTimestamp: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Topics: *[]*string,
	TumblingWindowInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig">AmazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | amazon_managed_kafka_event_source_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError">BisectBatchOnFunctionError</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig">DocumentDbEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | document_db_event_source_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn">EventSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria">FilterCriteria</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | filter_criteria block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes">FunctionResponseTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds">MaximumBatchingWindowInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds">MaximumRecordAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor">ParallelizationFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig">ProvisionedPollerConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | provisioned_poller_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues">Queues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource">SelfManagedEventSource</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | self_managed_event_source block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig">SelfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | self_managed_kafka_event_source_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfiguration">SourceAccessConfiguration</a></code> | <code>interface{}</code> | source_access_configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition">StartingPosition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp">StartingPositionTimestamp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics">Topics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds">TumblingWindowInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}.

---

##### `AmazonManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="AmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig"></a>

```go
AmazonManagedKafkaEventSourceConfig LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

amazon_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}.

---

##### `BisectBatchOnFunctionError`<sup>Optional</sup> <a name="BisectBatchOnFunctionError" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError"></a>

```go
BisectBatchOnFunctionError interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}.

---

##### `DestinationConfig`<sup>Optional</sup> <a name="DestinationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig"></a>

```go
DestinationConfig LambdaEventSourceMappingDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `DocumentDbEventSourceConfig`<sup>Optional</sup> <a name="DocumentDbEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.documentDbEventSourceConfig"></a>

```go
DocumentDbEventSourceConfig LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

document_db_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}.

---

##### `EventSourceArn`<sup>Optional</sup> <a name="EventSourceArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn"></a>

```go
EventSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}.

---

##### `FilterCriteria`<sup>Optional</sup> <a name="FilterCriteria" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria"></a>

```go
FilterCriteria LambdaEventSourceMappingFilterCriteria
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `FunctionResponseTypes`<sup>Optional</sup> <a name="FunctionResponseTypes" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes"></a>

```go
FunctionResponseTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}.

---

##### `MaximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="MaximumBatchingWindowInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds"></a>

```go
MaximumBatchingWindowInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}.

---

##### `MaximumRecordAgeInSeconds`<sup>Optional</sup> <a name="MaximumRecordAgeInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds"></a>

```go
MaximumRecordAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}.

---

##### `MaximumRetryAttempts`<sup>Optional</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts"></a>

```go
MaximumRetryAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}.

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.metricsConfig"></a>

```go
MetricsConfig LambdaEventSourceMappingMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}

---

##### `ParallelizationFactor`<sup>Optional</sup> <a name="ParallelizationFactor" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor"></a>

```go
ParallelizationFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}.

---

##### `ProvisionedPollerConfig`<sup>Optional</sup> <a name="ProvisionedPollerConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisionedPollerConfig"></a>

```go
ProvisionedPollerConfig LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

provisioned_poller_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}

---

##### `Queues`<sup>Optional</sup> <a name="Queues" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues"></a>

```go
Queues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#region LambdaEventSourceMapping#region}

---

##### `ScalingConfig`<sup>Optional</sup> <a name="ScalingConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig"></a>

```go
ScalingConfig LambdaEventSourceMappingScalingConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `SelfManagedEventSource`<sup>Optional</sup> <a name="SelfManagedEventSource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource"></a>

```go
SelfManagedEventSource LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

self_managed_event_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `SelfManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="SelfManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig"></a>

```go
SelfManagedKafkaEventSourceConfig LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

self_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `SourceAccessConfiguration`<sup>Optional</sup> <a name="SourceAccessConfiguration" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfiguration"></a>

```go
SourceAccessConfiguration interface{}
```

- *Type:* interface{}

source_access_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#source_access_configuration LambdaEventSourceMapping#source_access_configuration}

---

##### `StartingPosition`<sup>Optional</sup> <a name="StartingPosition" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition"></a>

```go
StartingPosition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}.

---

##### `StartingPositionTimestamp`<sup>Optional</sup> <a name="StartingPositionTimestamp" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp"></a>

```go
StartingPositionTimestamp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}.

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics"></a>

```go
Topics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}.

---

##### `TumblingWindowInSeconds`<sup>Optional</sup> <a name="TumblingWindowInSeconds" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds"></a>

```go
TumblingWindowInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}.

---

### LambdaEventSourceMappingDestinationConfig <a name="LambdaEventSourceMappingDestinationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingDestinationConfig {
	OnFailure: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | on_failure block. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure"></a>

```go
OnFailure LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}

---

### LambdaEventSourceMappingDestinationConfigOnFailure <a name="LambdaEventSourceMappingDestinationConfigOnFailure" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingDestinationConfigOnFailure {
	DestinationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}. |

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destinationArn"></a>

```go
DestinationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}.

---

### LambdaEventSourceMappingDocumentDbEventSourceConfig <a name="LambdaEventSourceMappingDocumentDbEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingDocumentDbEventSourceConfig {
	DatabaseName: *string,
	CollectionName: *string,
	FullDocument: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName">CollectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument">FullDocument</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}.

---

##### `CollectionName`<sup>Optional</sup> <a name="CollectionName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.collectionName"></a>

```go
CollectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}.

---

##### `FullDocument`<sup>Optional</sup> <a name="FullDocument" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig.property.fullDocument"></a>

```go
FullDocument *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}.

---

### LambdaEventSourceMappingFilterCriteria <a name="LambdaEventSourceMappingFilterCriteria" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingFilterCriteria {
	Filter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#filter LambdaEventSourceMapping#filter}

---

### LambdaEventSourceMappingFilterCriteriaFilter <a name="LambdaEventSourceMappingFilterCriteriaFilter" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingFilterCriteriaFilter {
	Pattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}. |

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}.

---

### LambdaEventSourceMappingMetricsConfig <a name="LambdaEventSourceMappingMetricsConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingMetricsConfig {
	Metrics: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics">Metrics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}. |

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig.property.metrics"></a>

```go
Metrics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}.

---

### LambdaEventSourceMappingProvisionedPollerConfig <a name="LambdaEventSourceMappingProvisionedPollerConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingProvisionedPollerConfig {
	MaximumPollers: *f64,
	MinimumPollers: *f64,
	PollerGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers">MaximumPollers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers">MinimumPollers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.pollerGroupName">PollerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#poller_group_name LambdaEventSourceMapping#poller_group_name}. |

---

##### `MaximumPollers`<sup>Optional</sup> <a name="MaximumPollers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.maximumPollers"></a>

```go
MaximumPollers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}.

---

##### `MinimumPollers`<sup>Optional</sup> <a name="MinimumPollers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.minimumPollers"></a>

```go
MinimumPollers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}.

---

##### `PollerGroupName`<sup>Optional</sup> <a name="PollerGroupName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig.property.pollerGroupName"></a>

```go
PollerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#poller_group_name LambdaEventSourceMapping#poller_group_name}.

---

### LambdaEventSourceMappingScalingConfig <a name="LambdaEventSourceMappingScalingConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingScalingConfig {
	MaximumConcurrency: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}. |

---

##### `MaximumConcurrency`<sup>Optional</sup> <a name="MaximumConcurrency" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency"></a>

```go
MaximumConcurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}.

---

### LambdaEventSourceMappingSelfManagedEventSource <a name="LambdaEventSourceMappingSelfManagedEventSource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingSelfManagedEventSource {
	Endpoints: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints">Endpoints</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}. |

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints"></a>

```go
Endpoints *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}.

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig {
	ConsumerGroupId: *string,
	SchemaRegistryConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId">ConsumerGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | schema_registry_config block. |

---

##### `ConsumerGroupId`<sup>Optional</sup> <a name="ConsumerGroupId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```go
ConsumerGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

##### `SchemaRegistryConfig`<sup>Optional</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.schemaRegistryConfig"></a>

```go
SchemaRegistryConfig LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

schema_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_registry_config LambdaEventSourceMapping#schema_registry_config}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig {
	AccessConfig: interface{},
	EventRecordFormat: *string,
	SchemaRegistryUri: *string,
	SchemaValidationConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig">AccessConfig</a></code> | <code>interface{}</code> | access_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat">EventRecordFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig">SchemaValidationConfig</a></code> | <code>interface{}</code> | schema_validation_config block. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.accessConfig"></a>

```go
AccessConfig interface{}
```

- *Type:* interface{}

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#access_config LambdaEventSourceMapping#access_config}

---

##### `EventRecordFormat`<sup>Optional</sup> <a name="EventRecordFormat" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.eventRecordFormat"></a>

```go
EventRecordFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#event_record_format LambdaEventSourceMapping#event_record_format}.

---

##### `SchemaRegistryUri`<sup>Optional</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaRegistryUri"></a>

```go
SchemaRegistryUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_registry_uri LambdaEventSourceMapping#schema_registry_uri}.

---

##### `SchemaValidationConfig`<sup>Optional</sup> <a name="SchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.property.schemaValidationConfig"></a>

```go
SchemaValidationConfig interface{}
```

- *Type:* interface{}

schema_validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#schema_validation_config LambdaEventSourceMapping#schema_validation_config}

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig {
	Type: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}.

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig {
	Attribute: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute">Attribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfig.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#attribute LambdaEventSourceMapping#attribute}.

---

### LambdaEventSourceMappingSourceAccessConfiguration <a name="LambdaEventSourceMappingSourceAccessConfiguration" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

&lambdaeventsourcemapping.LambdaEventSourceMappingSourceAccessConfiguration {
	Type: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">PutSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">ResetConsumerGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">ResetSchemaRegistryConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaRegistryConfig` <a name="PutSchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```go
func PutSchemaRegistryConfig(value LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ResetConsumerGroupId` <a name="ResetConsumerGroupId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```go
func ResetConsumerGroupId()
```

##### `ResetSchemaRegistryConfig` <a name="ResetSchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```go
func ResetSchemaRegistryConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">ConsumerGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">SchemaRegistryConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">ConsumerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaRegistryConfig`<sup>Required</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```go
func SchemaRegistryConfig() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `ConsumerGroupIdInput`<sup>Optional</sup> <a name="ConsumerGroupIdInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```go
func ConsumerGroupIdInput() *string
```

- *Type:* *string

---

##### `SchemaRegistryConfigInput`<sup>Optional</sup> <a name="SchemaRegistryConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```go
func SchemaRegistryConfigInput() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ConsumerGroupId`<sup>Required</sup> <a name="ConsumerGroupId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```go
func ConsumerGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get"></a>

```go
func Get(index *f64) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig">PutSchemaValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">ResetEventRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">ResetSchemaRegistryUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig">ResetSchemaValidationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchemaValidationConfig` <a name="PutSchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig"></a>

```go
func PutSchemaValidationConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig"></a>

```go
func ResetAccessConfig()
```

##### `ResetEventRecordFormat` <a name="ResetEventRecordFormat" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```go
func ResetEventRecordFormat()
```

##### `ResetSchemaRegistryUri` <a name="ResetSchemaRegistryUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```go
func ResetSchemaRegistryUri()
```

##### `ResetSchemaValidationConfig` <a name="ResetSchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig"></a>

```go
func ResetSchemaValidationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig">SchemaValidationConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">EventRecordFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">SchemaRegistryUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput">SchemaValidationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">EventRecordFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig"></a>

```go
func AccessConfig() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a>

---

##### `SchemaValidationConfig`<sup>Required</sup> <a name="SchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig"></a>

```go
func SchemaValidationConfig() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EventRecordFormatInput`<sup>Optional</sup> <a name="EventRecordFormatInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```go
func EventRecordFormatInput() *string
```

- *Type:* *string

---

##### `SchemaRegistryUriInput`<sup>Optional</sup> <a name="SchemaRegistryUriInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```go
func SchemaRegistryUriInput() *string
```

- *Type:* *string

---

##### `SchemaValidationConfigInput`<sup>Optional</sup> <a name="SchemaValidationConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput"></a>

```go
func SchemaValidationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EventRecordFormat`<sup>Required</sup> <a name="EventRecordFormat" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```go
func EventRecordFormat() *string
```

- *Type:* *string

---

##### `SchemaRegistryUri`<sup>Required</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```go
func SchemaRegistryUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get"></a>

```go
func Get(index *f64) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingDestinationConfigOnFailureOutputReference <a name="LambdaEventSourceMappingDestinationConfigOnFailureOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingDestinationConfigOnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingDestinationConfigOnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArnInput"></a>

```go
func DestinationArnInput() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---


### LambdaEventSourceMappingDestinationConfigOutputReference <a name="LambdaEventSourceMappingDestinationConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingDestinationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingDestinationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure"></a>

```go
func PutOnFailure(value LambdaEventSourceMappingDestinationConfigOnFailure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure"></a>

```go
func ResetOnFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure"></a>

```go
func OnFailure() LambdaEventSourceMappingDestinationConfigOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput"></a>

```go
func OnFailureInput() LambdaEventSourceMappingDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---


### LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference <a name="LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName">ResetCollectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument">ResetFullDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCollectionName` <a name="ResetCollectionName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetCollectionName"></a>

```go
func ResetCollectionName()
```

##### `ResetFullDocument` <a name="ResetFullDocument" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resetFullDocument"></a>

```go
func ResetFullDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput">CollectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput">FullDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName">CollectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument">FullDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionNameInput`<sup>Optional</sup> <a name="CollectionNameInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionNameInput"></a>

```go
func CollectionNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `FullDocumentInput`<sup>Optional</sup> <a name="FullDocumentInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocumentInput"></a>

```go
func FullDocumentInput() *string
```

- *Type:* *string

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName"></a>

```go
func CollectionName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `FullDocument`<sup>Required</sup> <a name="FullDocument" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument"></a>

```go
func FullDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingDocumentDbEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDocumentDbEventSourceConfig">LambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---


### LambdaEventSourceMappingFilterCriteriaFilterList <a name="LambdaEventSourceMappingFilterCriteriaFilterList" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingFilterCriteriaFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaEventSourceMappingFilterCriteriaFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get"></a>

```go
func Get(index *f64) LambdaEventSourceMappingFilterCriteriaFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingFilterCriteriaFilterOutputReference <a name="LambdaEventSourceMappingFilterCriteriaFilterOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingFilterCriteriaFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaEventSourceMappingFilterCriteriaFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resetPattern"></a>

```go
func ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingFilterCriteriaOutputReference <a name="LambdaEventSourceMappingFilterCriteriaOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingFilterCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingFilterCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilter"></a>

```go
func ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList">LambdaEventSourceMappingFilterCriteriaFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filter"></a>

```go
func Filter() LambdaEventSourceMappingFilterCriteriaFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList">LambdaEventSourceMappingFilterCriteriaFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingFilterCriteria
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---


### LambdaEventSourceMappingMetricsConfigOutputReference <a name="LambdaEventSourceMappingMetricsConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput">MetricsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics">Metrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metricsInput"></a>

```go
func MetricsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.metrics"></a>

```go
func Metrics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingMetricsConfig">LambdaEventSourceMappingMetricsConfig</a>

---


### LambdaEventSourceMappingProvisionedPollerConfigOutputReference <a name="LambdaEventSourceMappingProvisionedPollerConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingProvisionedPollerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingProvisionedPollerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers">ResetMaximumPollers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers">ResetMinimumPollers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetPollerGroupName">ResetPollerGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumPollers` <a name="ResetMaximumPollers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMaximumPollers"></a>

```go
func ResetMaximumPollers()
```

##### `ResetMinimumPollers` <a name="ResetMinimumPollers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetMinimumPollers"></a>

```go
func ResetMinimumPollers()
```

##### `ResetPollerGroupName` <a name="ResetPollerGroupName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.resetPollerGroupName"></a>

```go
func ResetPollerGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput">MaximumPollersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput">MinimumPollersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupNameInput">PollerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers">MaximumPollers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers">MinimumPollers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName">PollerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumPollersInput`<sup>Optional</sup> <a name="MaximumPollersInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollersInput"></a>

```go
func MaximumPollersInput() *f64
```

- *Type:* *f64

---

##### `MinimumPollersInput`<sup>Optional</sup> <a name="MinimumPollersInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollersInput"></a>

```go
func MinimumPollersInput() *f64
```

- *Type:* *f64

---

##### `PollerGroupNameInput`<sup>Optional</sup> <a name="PollerGroupNameInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupNameInput"></a>

```go
func PollerGroupNameInput() *string
```

- *Type:* *string

---

##### `MaximumPollers`<sup>Required</sup> <a name="MaximumPollers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers"></a>

```go
func MaximumPollers() *f64
```

- *Type:* *f64

---

##### `MinimumPollers`<sup>Required</sup> <a name="MinimumPollers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers"></a>

```go
func MinimumPollers() *f64
```

- *Type:* *f64

---

##### `PollerGroupName`<sup>Required</sup> <a name="PollerGroupName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName"></a>

```go
func PollerGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingProvisionedPollerConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingProvisionedPollerConfig">LambdaEventSourceMappingProvisionedPollerConfig</a>

---


### LambdaEventSourceMappingScalingConfigOutputReference <a name="LambdaEventSourceMappingScalingConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency">ResetMaximumConcurrency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumConcurrency` <a name="ResetMaximumConcurrency" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency"></a>

```go
func ResetMaximumConcurrency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput">MaximumConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumConcurrencyInput`<sup>Optional</sup> <a name="MaximumConcurrencyInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput"></a>

```go
func MaximumConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MaximumConcurrency`<sup>Required</sup> <a name="MaximumConcurrency" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency"></a>

```go
func MaximumConcurrency() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingScalingConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---


### LambdaEventSourceMappingSelfManagedEventSourceOutputReference <a name="LambdaEventSourceMappingSelfManagedEventSourceOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSelfManagedEventSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingSelfManagedEventSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput">EndpointsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints">Endpoints</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput"></a>

```go
func EndpointsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints"></a>

```go
func Endpoints() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingSelfManagedEventSource
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig">PutSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">ResetConsumerGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig">ResetSchemaRegistryConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaRegistryConfig` <a name="PutSchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig"></a>

```go
func PutSchemaRegistryConfig(value LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.putSchemaRegistryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ResetConsumerGroupId` <a name="ResetConsumerGroupId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```go
func ResetConsumerGroupId()
```

##### `ResetSchemaRegistryConfig` <a name="ResetSchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetSchemaRegistryConfig"></a>

```go
func ResetSchemaRegistryConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">SchemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">ConsumerGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput">SchemaRegistryConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">ConsumerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaRegistryConfig`<sup>Required</sup> <a name="SchemaRegistryConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```go
func SchemaRegistryConfig() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `ConsumerGroupIdInput`<sup>Optional</sup> <a name="ConsumerGroupIdInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```go
func ConsumerGroupIdInput() *string
```

- *Type:* *string

---

##### `SchemaRegistryConfigInput`<sup>Optional</sup> <a name="SchemaRegistryConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfigInput"></a>

```go
func SchemaRegistryConfigInput() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---

##### `ConsumerGroupId`<sup>Required</sup> <a name="ConsumerGroupId" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```go
func ConsumerGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get"></a>

```go
func Get(index *f64) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig">PutSchemaValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat">ResetEventRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri">ResetSchemaRegistryUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig">ResetSchemaValidationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchemaValidationConfig` <a name="PutSchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig"></a>

```go
func PutSchemaValidationConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.putSchemaValidationConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetAccessConfig"></a>

```go
func ResetAccessConfig()
```

##### `ResetEventRecordFormat` <a name="ResetEventRecordFormat" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetEventRecordFormat"></a>

```go
func ResetEventRecordFormat()
```

##### `ResetSchemaRegistryUri` <a name="ResetSchemaRegistryUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaRegistryUri"></a>

```go
func ResetSchemaRegistryUri()
```

##### `ResetSchemaValidationConfig` <a name="ResetSchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resetSchemaValidationConfig"></a>

```go
func ResetSchemaValidationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig">SchemaValidationConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput">EventRecordFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput">SchemaRegistryUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput">SchemaValidationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">EventRecordFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">SchemaRegistryUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfig"></a>

```go
func AccessConfig() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigList</a>

---

##### `SchemaValidationConfig`<sup>Required</sup> <a name="SchemaValidationConfig" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfig"></a>

```go
func SchemaValidationConfig() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EventRecordFormatInput`<sup>Optional</sup> <a name="EventRecordFormatInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormatInput"></a>

```go
func EventRecordFormatInput() *string
```

- *Type:* *string

---

##### `SchemaRegistryUriInput`<sup>Optional</sup> <a name="SchemaRegistryUriInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUriInput"></a>

```go
func SchemaRegistryUriInput() *string
```

- *Type:* *string

---

##### `SchemaValidationConfigInput`<sup>Optional</sup> <a name="SchemaValidationConfigInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigInput"></a>

```go
func SchemaValidationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EventRecordFormat`<sup>Required</sup> <a name="EventRecordFormat" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```go
func EventRecordFormat() *string
```

- *Type:* *string

---

##### `SchemaRegistryUri`<sup>Required</sup> <a name="SchemaRegistryUri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```go
func SchemaRegistryUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get"></a>

```go
func Get(index *f64) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingSourceAccessConfigurationList <a name="LambdaEventSourceMappingSourceAccessConfigurationList" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSourceAccessConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaEventSourceMappingSourceAccessConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get"></a>

```go
func Get(index *f64) LambdaEventSourceMappingSourceAccessConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaEventSourceMappingSourceAccessConfigurationOutputReference <a name="LambdaEventSourceMappingSourceAccessConfigurationOutputReference" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lambdaeventsourcemapping"

lambdaeventsourcemapping.NewLambdaEventSourceMappingSourceAccessConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaEventSourceMappingSourceAccessConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



