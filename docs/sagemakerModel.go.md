# `sagemakerModel` Submodule <a name="`sagemakerModel` Submodule" id="@cdktn/provider-aws.sagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModel <a name="SagemakerModel" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model aws_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModel(scope Construct, id *string, config SagemakerModelConfig) SagemakerModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig">PutInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer">PutPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig">ResetInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetPrimaryContainer">ResetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putContainer"></a>

```go
func PutContainer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putContainer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInferenceExecutionConfig` <a name="PutInferenceExecutionConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig"></a>

```go
func PutInferenceExecutionConfig(value SagemakerModelInferenceExecutionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `PutPrimaryContainer` <a name="PutPrimaryContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer"></a>

```go
func PutPrimaryContainer(value SagemakerModelPrimaryContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerModelVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetId"></a>

```go
func ResetId()
```

##### `ResetInferenceExecutionConfig` <a name="ResetInferenceExecutionConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig"></a>

```go
func ResetInferenceExecutionConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetName"></a>

```go
func ResetName()
```

##### `ResetPrimaryContainer` <a name="ResetPrimaryContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetPrimaryContainer"></a>

```go
func ResetPrimaryContainer()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.SagemakerModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.SagemakerModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.SagemakerModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.SagemakerModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.container">Container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig">InferenceExecutionConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.containerInput">ContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput">InferenceExecutionConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainerInput">PrimaryContainerInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.container"></a>

```go
func Container() SagemakerModelContainerList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a>

---

##### `InferenceExecutionConfig`<sup>Required</sup> <a name="InferenceExecutionConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig"></a>

```go
func InferenceExecutionConfig() SagemakerModelInferenceExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainer"></a>

```go
func PrimaryContainer() SagemakerModelPrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerModelVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.containerInput"></a>

```go
func ContainerInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InferenceExecutionConfigInput`<sup>Optional</sup> <a name="InferenceExecutionConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput"></a>

```go
func InferenceExecutionConfigInput() SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryContainerInput`<sup>Optional</sup> <a name="PrimaryContainerInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainerInput"></a>

```go
func PrimaryContainerInput() SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfigInput"></a>

```go
func VpcConfigInput() SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelConfig <a name="SagemakerModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExecutionRoleArn: *string,
	Container: interface{},
	EnableNetworkIsolation: interface{},
	Id: *string,
	InferenceExecutionConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelInferenceExecutionConfig,
	Name: *string,
	PrimaryContainer: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelPrimaryContainer,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	VpcConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.container">Container</a></code> | <code>interface{}</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#id SagemakerModel#id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig">InferenceExecutionConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | inference_execution_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#name SagemakerModel#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | primary_container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#tags SagemakerModel#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}.

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.container"></a>

```go
Container interface{}
```

- *Type:* interface{}

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#container SagemakerModel#container}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#id SagemakerModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceExecutionConfig`<sup>Optional</sup> <a name="InferenceExecutionConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig"></a>

```go
InferenceExecutionConfig SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

inference_execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#name SagemakerModel#name}.

---

##### `PrimaryContainer`<sup>Optional</sup> <a name="PrimaryContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.primaryContainer"></a>

```go
PrimaryContainer SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

primary_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#region SagemakerModel#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#tags SagemakerModel#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

### SagemakerModelContainer <a name="SagemakerModelContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainer {
	AdditionalModelDataSource: interface{},
	ContainerHostname: *string,
	Environment: *map[string]*string,
	Image: *string,
	ImageConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelContainerImageConfig,
	InferenceSpecificationName: *string,
	Mode: *string,
	ModelDataSource: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelContainerModelDataSource,
	ModelDataUrl: *string,
	ModelPackageName: *string,
	MultiModelConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelContainerMultiModelConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.additionalModelDataSource">AdditionalModelDataSource</a></code> | <code>interface{}</code> | additional_model_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a></code> | model_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a></code> | multi_model_config block. |

---

##### `AdditionalModelDataSource`<sup>Optional</sup> <a name="AdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.additionalModelDataSource"></a>

```go
AdditionalModelDataSource interface{}
```

- *Type:* interface{}

additional_model_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#additional_model_data_source SagemakerModel#additional_model_data_source}

---

##### `ContainerHostname`<sup>Optional</sup> <a name="ContainerHostname" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.containerHostname"></a>

```go
ContainerHostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#image SagemakerModel#image}.

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.imageConfig"></a>

```go
ImageConfig SagemakerModelContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `InferenceSpecificationName`<sup>Optional</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.inferenceSpecificationName"></a>

```go
InferenceSpecificationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

##### `ModelDataSource`<sup>Optional</sup> <a name="ModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataSource"></a>

```go
ModelDataSource SagemakerModelContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

model_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `ModelDataUrl`<sup>Optional</sup> <a name="ModelDataUrl" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataUrl"></a>

```go
ModelDataUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

##### `ModelPackageName`<sup>Optional</sup> <a name="ModelPackageName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelPackageName"></a>

```go
ModelPackageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}.

---

##### `MultiModelConfig`<sup>Optional</sup> <a name="MultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainer.property.multiModelConfig"></a>

```go
MultiModelConfig SagemakerModelContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

multi_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelContainerAdditionalModelDataSource <a name="SagemakerModelContainerAdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerAdditionalModelDataSource {
	ChannelName: *string,
	S3DataSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSource.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#channel_name SagemakerModel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code>interface{}</code> | s3_data_source block. |

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSource.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#channel_name SagemakerModel#channel_name}.

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSource.property.s3DataSource"></a>

```go
S3DataSource interface{}
```

- *Type:* interface{}

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelContainerAdditionalModelDataSourceS3DataSource <a name="SagemakerModelContainerAdditionalModelDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource {
	CompressionType: *string,
	S3DataType: *string,
	S3Uri: *string,
	ModelAccessConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a></code> | model_access_config block. |

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}.

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.s3DataType"></a>

```go
S3DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}.

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```go
ModelAccessConfig SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

model_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

### SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig {
	AcceptEula: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}. |

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```go
AcceptEula interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}.

---

### SagemakerModelContainerImageConfig <a name="SagemakerModelContainerImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerImageConfig {
	RepositoryAccessMode: *string,
	RepositoryAuthConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | repository_auth_config block. |

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode"></a>

```go
RepositoryAccessMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

##### `RepositoryAuthConfig`<sup>Optional</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAuthConfig"></a>

```go
RepositoryAuthConfig SagemakerModelContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelContainerImageConfigRepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerImageConfigRepositoryAuthConfig {
	RepositoryCredentialsProviderArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}. |

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```go
RepositoryCredentialsProviderArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

### SagemakerModelContainerModelDataSource <a name="SagemakerModelContainerModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerModelDataSource {
	S3DataSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code>interface{}</code> | s3_data_source block. |

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource.property.s3DataSource"></a>

```go
S3DataSource interface{}
```

- *Type:* interface{}

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelContainerModelDataSourceS3DataSource <a name="SagemakerModelContainerModelDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerModelDataSourceS3DataSource {
	CompressionType: *string,
	S3DataType: *string,
	S3Uri: *string,
	ModelAccessConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | model_access_config block. |

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}.

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3DataType"></a>

```go
S3DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}.

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```go
ModelAccessConfig SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

model_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

### SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig {
	AcceptEula: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}. |

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```go
AcceptEula interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}.

---

### SagemakerModelContainerMultiModelConfig <a name="SagemakerModelContainerMultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelContainerMultiModelConfig {
	ModelCacheSetting: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}. |

---

##### `ModelCacheSetting`<sup>Optional</sup> <a name="ModelCacheSetting" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig.property.modelCacheSetting"></a>

```go
ModelCacheSetting *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}.

---

### SagemakerModelInferenceExecutionConfig <a name="SagemakerModelInferenceExecutionConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelInferenceExecutionConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

### SagemakerModelPrimaryContainer <a name="SagemakerModelPrimaryContainer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainer {
	AdditionalModelDataSource: interface{},
	ContainerHostname: *string,
	Environment: *map[string]*string,
	Image: *string,
	ImageConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig,
	InferenceSpecificationName: *string,
	Mode: *string,
	ModelDataSource: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource,
	ModelDataUrl: *string,
	ModelPackageName: *string,
	MultiModelConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.additionalModelDataSource">AdditionalModelDataSource</a></code> | <code>interface{}</code> | additional_model_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | model_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | multi_model_config block. |

---

##### `AdditionalModelDataSource`<sup>Optional</sup> <a name="AdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.additionalModelDataSource"></a>

```go
AdditionalModelDataSource interface{}
```

- *Type:* interface{}

additional_model_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#additional_model_data_source SagemakerModel#additional_model_data_source}

---

##### `ContainerHostname`<sup>Optional</sup> <a name="ContainerHostname" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname"></a>

```go
ContainerHostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#image SagemakerModel#image}.

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig"></a>

```go
ImageConfig SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `InferenceSpecificationName`<sup>Optional</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName"></a>

```go
InferenceSpecificationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

##### `ModelDataSource`<sup>Optional</sup> <a name="ModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource"></a>

```go
ModelDataSource SagemakerModelPrimaryContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

model_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `ModelDataUrl`<sup>Optional</sup> <a name="ModelDataUrl" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl"></a>

```go
ModelDataUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

##### `ModelPackageName`<sup>Optional</sup> <a name="ModelPackageName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName"></a>

```go
ModelPackageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}.

---

##### `MultiModelConfig`<sup>Optional</sup> <a name="MultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig"></a>

```go
MultiModelConfig SagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

multi_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelPrimaryContainerAdditionalModelDataSource <a name="SagemakerModelPrimaryContainerAdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerAdditionalModelDataSource {
	ChannelName: *string,
	S3DataSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSource.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#channel_name SagemakerModel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code>interface{}</code> | s3_data_source block. |

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSource.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#channel_name SagemakerModel#channel_name}.

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSource.property.s3DataSource"></a>

```go
S3DataSource interface{}
```

- *Type:* interface{}

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource <a name="SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource {
	CompressionType: *string,
	S3DataType: *string,
	S3Uri: *string,
	ModelAccessConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a></code> | model_access_config block. |

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}.

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.s3DataType"></a>

```go
S3DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}.

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```go
ModelAccessConfig SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

model_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

### SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig {
	AcceptEula: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}. |

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```go
AcceptEula interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}.

---

### SagemakerModelPrimaryContainerImageConfig <a name="SagemakerModelPrimaryContainerImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerImageConfig {
	RepositoryAccessMode: *string,
	RepositoryAuthConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | repository_auth_config block. |

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode"></a>

```go
RepositoryAccessMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

##### `RepositoryAuthConfig`<sup>Optional</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig"></a>

```go
RepositoryAuthConfig SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig {
	RepositoryCredentialsProviderArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}. |

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```go
RepositoryCredentialsProviderArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

### SagemakerModelPrimaryContainerModelDataSource <a name="SagemakerModelPrimaryContainerModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerModelDataSource {
	S3DataSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code>interface{}</code> | s3_data_source block. |

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource"></a>

```go
S3DataSource interface{}
```

- *Type:* interface{}

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSource <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource {
	CompressionType: *string,
	S3DataType: *string,
	S3Uri: *string,
	ModelAccessConfig: github.com/cdktn-io/cdktn-provider-aws-go/aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | model_access_config block. |

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}.

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType"></a>

```go
S3DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}.

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```go
ModelAccessConfig SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

model_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
	AcceptEula: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}. |

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```go
AcceptEula interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}.

---

### SagemakerModelPrimaryContainerMultiModelConfig <a name="SagemakerModelPrimaryContainerMultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerMultiModelConfig {
	ModelCacheSetting: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}. |

---

##### `ModelCacheSetting`<sup>Optional</sup> <a name="ModelCacheSetting" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting"></a>

```go
ModelCacheSetting *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}.

---

### SagemakerModelVpcConfig <a name="SagemakerModelVpcConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

&sagemakermodel.SagemakerModelVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelContainerAdditionalModelDataSourceList <a name="SagemakerModelContainerAdditionalModelDataSourceList" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerAdditionalModelDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelContainerAdditionalModelDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.get"></a>

```go
func Get(index *f64) SagemakerModelContainerAdditionalModelDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainerAdditionalModelDataSourceOutputReference <a name="SagemakerModelContainerAdditionalModelDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerAdditionalModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelContainerAdditionalModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.putS3DataSource"></a>

```go
func PutS3DataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```go
func S3DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList <a name="SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerAdditionalModelDataSourceS3DataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.get"></a>

```go
func Get(index *f64) SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```go
func AcceptEulaInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```go
func PutModelAccessConfig(value SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```go
func ResetModelAccessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```go
func ModelAccessConfigInput() SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```go
func S3DataTypeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainerImageConfigOutputReference <a name="SagemakerModelContainerImageConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainerImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig">PutRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resetRepositoryAuthConfig">ResetRepositoryAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepositoryAuthConfig` <a name="PutRepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```go
func PutRepositoryAuthConfig(value SagemakerModelContainerImageConfigRepositoryAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---

##### `ResetRepositoryAuthConfig` <a name="ResetRepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```go
func ResetRepositoryAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput">RepositoryAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfigInput">RepositoryAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```go
func RepositoryAuthConfig() SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `RepositoryAccessModeInput`<sup>Optional</sup> <a name="RepositoryAccessModeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```go
func RepositoryAccessModeInput() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfigInput`<sup>Optional</sup> <a name="RepositoryAuthConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```go
func RepositoryAuthConfigInput() SagemakerModelContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```go
func RepositoryAccessMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---


### SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">RepositoryCredentialsProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArnInput`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArnInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```go
func RepositoryCredentialsProviderArnInput() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```go
func RepositoryCredentialsProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelContainerList <a name="SagemakerModelContainerList" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelContainerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.get"></a>

```go
func Get(index *f64) SagemakerModelContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainerModelDataSourceOutputReference <a name="SagemakerModelContainerModelDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainerModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.putS3DataSource"></a>

```go
func PutS3DataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList">SagemakerModelContainerModelDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() SagemakerModelContainerModelDataSourceS3DataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList">SagemakerModelContainerModelDataSourceS3DataSourceList</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```go
func S3DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

---


### SagemakerModelContainerModelDataSourceS3DataSourceList <a name="SagemakerModelContainerModelDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerModelDataSourceS3DataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelContainerModelDataSourceS3DataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.get"></a>

```go
func Get(index *f64) SagemakerModelContainerModelDataSourceS3DataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```go
func AcceptEulaInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelContainerModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelContainerModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelContainerModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```go
func PutModelAccessConfig(value SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```go
func ResetModelAccessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```go
func ModelAccessConfigInput() SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```go
func S3DataTypeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainerMultiModelConfigOutputReference <a name="SagemakerModelContainerMultiModelConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerMultiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainerMultiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resetModelCacheSetting">ResetModelCacheSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelCacheSetting` <a name="ResetModelCacheSetting" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```go
func ResetModelCacheSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSettingInput">ModelCacheSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelCacheSettingInput`<sup>Optional</sup> <a name="ModelCacheSettingInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```go
func ModelCacheSettingInput() *string
```

- *Type:* *string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```go
func ModelCacheSetting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

---


### SagemakerModelContainerOutputReference <a name="SagemakerModelContainerOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putAdditionalModelDataSource">PutAdditionalModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putModelDataSource">PutModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putMultiModelConfig">PutMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetAdditionalModelDataSource">ResetAdditionalModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname">ResetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetInferenceSpecificationName">ResetInferenceSpecificationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataSource">ResetModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl">ResetModelDataUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelPackageName">ResetModelPackageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMultiModelConfig">ResetMultiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalModelDataSource` <a name="PutAdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putAdditionalModelDataSource"></a>

```go
func PutAdditionalModelDataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putAdditionalModelDataSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig"></a>

```go
func PutImageConfig(value SagemakerModelContainerImageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---

##### `PutModelDataSource` <a name="PutModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putModelDataSource"></a>

```go
func PutModelDataSource(value SagemakerModelContainerModelDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putModelDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

---

##### `PutMultiModelConfig` <a name="PutMultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putMultiModelConfig"></a>

```go
func PutMultiModelConfig(value SagemakerModelContainerMultiModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putMultiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

---

##### `ResetAdditionalModelDataSource` <a name="ResetAdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetAdditionalModelDataSource"></a>

```go
func ResetAdditionalModelDataSource()
```

##### `ResetContainerHostname` <a name="ResetContainerHostname" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname"></a>

```go
func ResetContainerHostname()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig"></a>

```go
func ResetImageConfig()
```

##### `ResetInferenceSpecificationName` <a name="ResetInferenceSpecificationName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetInferenceSpecificationName"></a>

```go
func ResetInferenceSpecificationName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetModelDataSource` <a name="ResetModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataSource"></a>

```go
func ResetModelDataSource()
```

##### `ResetModelDataUrl` <a name="ResetModelDataUrl" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl"></a>

```go
func ResetModelDataUrl()
```

##### `ResetModelPackageName` <a name="ResetModelPackageName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelPackageName"></a>

```go
func ResetModelPackageName()
```

##### `ResetMultiModelConfig` <a name="ResetMultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMultiModelConfig"></a>

```go
func ResetMultiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.additionalModelDataSource">AdditionalModelDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList">SagemakerModelContainerAdditionalModelDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference">SagemakerModelContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference">SagemakerModelContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.additionalModelDataSourceInput">AdditionalModelDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput">ContainerHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput">ImageConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationNameInput">InferenceSpecificationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSourceInput">ModelDataSourceInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput">ModelDataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageNameInput">ModelPackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfigInput">MultiModelConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalModelDataSource`<sup>Required</sup> <a name="AdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.additionalModelDataSource"></a>

```go
func AdditionalModelDataSource() SagemakerModelContainerAdditionalModelDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerAdditionalModelDataSourceList">SagemakerModelContainerAdditionalModelDataSourceList</a>

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig"></a>

```go
func ImageConfig() SagemakerModelContainerImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a>

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSource"></a>

```go
func ModelDataSource() SagemakerModelContainerModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference">SagemakerModelContainerModelDataSourceOutputReference</a>

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfig"></a>

```go
func MultiModelConfig() SagemakerModelContainerMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference">SagemakerModelContainerMultiModelConfigOutputReference</a>

---

##### `AdditionalModelDataSourceInput`<sup>Optional</sup> <a name="AdditionalModelDataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.additionalModelDataSourceInput"></a>

```go
func AdditionalModelDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerHostnameInput`<sup>Optional</sup> <a name="ContainerHostnameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput"></a>

```go
func ContainerHostnameInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput"></a>

```go
func ImageConfigInput() SagemakerModelContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InferenceSpecificationNameInput`<sup>Optional</sup> <a name="InferenceSpecificationNameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationNameInput"></a>

```go
func InferenceSpecificationNameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ModelDataSourceInput`<sup>Optional</sup> <a name="ModelDataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSourceInput"></a>

```go
func ModelDataSourceInput() SagemakerModelContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

---

##### `ModelDataUrlInput`<sup>Optional</sup> <a name="ModelDataUrlInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput"></a>

```go
func ModelDataUrlInput() *string
```

- *Type:* *string

---

##### `ModelPackageNameInput`<sup>Optional</sup> <a name="ModelPackageNameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageNameInput"></a>

```go
func ModelPackageNameInput() *string
```

- *Type:* *string

---

##### `MultiModelConfigInput`<sup>Optional</sup> <a name="MultiModelConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfigInput"></a>

```go
func MultiModelConfigInput() SagemakerModelContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname"></a>

```go
func ContainerHostname() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationName"></a>

```go
func InferenceSpecificationName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl"></a>

```go
func ModelDataUrl() *string
```

- *Type:* *string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageName"></a>

```go
func ModelPackageName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelInferenceExecutionConfigOutputReference <a name="SagemakerModelInferenceExecutionConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelInferenceExecutionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelInferenceExecutionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---


### SagemakerModelPrimaryContainerAdditionalModelDataSourceList <a name="SagemakerModelPrimaryContainerAdditionalModelDataSourceList" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerAdditionalModelDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelPrimaryContainerAdditionalModelDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.get"></a>

```go
func Get(index *f64) SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference <a name="SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.putS3DataSource"></a>

```go
func PutS3DataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```go
func S3DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList <a name="SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.get"></a>

```go
func Get(index *f64) SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```go
func AcceptEulaInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```go
func PutModelAccessConfig(value SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```go
func ResetModelAccessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```go
func ModelAccessConfigInput() SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```go
func S3DataTypeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerImageConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig">PutRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig">ResetRepositoryAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepositoryAuthConfig` <a name="PutRepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```go
func PutRepositoryAuthConfig(value SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---

##### `ResetRepositoryAuthConfig` <a name="ResetRepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```go
func ResetRepositoryAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput">RepositoryAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput">RepositoryAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```go
func RepositoryAuthConfig() SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `RepositoryAccessModeInput`<sup>Optional</sup> <a name="RepositoryAccessModeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```go
func RepositoryAccessModeInput() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfigInput`<sup>Optional</sup> <a name="RepositoryAuthConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```go
func RepositoryAuthConfigInput() SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```go
func RepositoryAccessMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">RepositoryCredentialsProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArnInput`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArnInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```go
func RepositoryCredentialsProviderArnInput() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```go
func RepositoryCredentialsProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelPrimaryContainerModelDataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource"></a>

```go
func PutS3DataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```go
func S3DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelPrimaryContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceS3DataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.get"></a>

```go
func Get(index *f64) SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```go
func AcceptEulaInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```go
func PutModelAccessConfig(value SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```go
func ResetModelAccessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```go
func ModelAccessConfigInput() SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```go
func S3DataTypeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerMultiModelConfigOutputReference <a name="SagemakerModelPrimaryContainerMultiModelConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerMultiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerMultiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting">ResetModelCacheSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelCacheSetting` <a name="ResetModelCacheSetting" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```go
func ResetModelCacheSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput">ModelCacheSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelCacheSettingInput`<sup>Optional</sup> <a name="ModelCacheSettingInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```go
func ModelCacheSettingInput() *string
```

- *Type:* *string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```go
func ModelCacheSetting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---


### SagemakerModelPrimaryContainerOutputReference <a name="SagemakerModelPrimaryContainerOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putAdditionalModelDataSource">PutAdditionalModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource">PutModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig">PutMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetAdditionalModelDataSource">ResetAdditionalModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname">ResetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName">ResetInferenceSpecificationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource">ResetModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl">ResetModelDataUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName">ResetModelPackageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig">ResetMultiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalModelDataSource` <a name="PutAdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putAdditionalModelDataSource"></a>

```go
func PutAdditionalModelDataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putAdditionalModelDataSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig"></a>

```go
func PutImageConfig(value SagemakerModelPrimaryContainerImageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `PutModelDataSource` <a name="PutModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource"></a>

```go
func PutModelDataSource(value SagemakerModelPrimaryContainerModelDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---

##### `PutMultiModelConfig` <a name="PutMultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig"></a>

```go
func PutMultiModelConfig(value SagemakerModelPrimaryContainerMultiModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---

##### `ResetAdditionalModelDataSource` <a name="ResetAdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetAdditionalModelDataSource"></a>

```go
func ResetAdditionalModelDataSource()
```

##### `ResetContainerHostname` <a name="ResetContainerHostname" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname"></a>

```go
func ResetContainerHostname()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig"></a>

```go
func ResetImageConfig()
```

##### `ResetInferenceSpecificationName` <a name="ResetInferenceSpecificationName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName"></a>

```go
func ResetInferenceSpecificationName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetModelDataSource` <a name="ResetModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource"></a>

```go
func ResetModelDataSource()
```

##### `ResetModelDataUrl` <a name="ResetModelDataUrl" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl"></a>

```go
func ResetModelDataUrl()
```

##### `ResetModelPackageName` <a name="ResetModelPackageName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName"></a>

```go
func ResetModelPackageName()
```

##### `ResetMultiModelConfig` <a name="ResetMultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig"></a>

```go
func ResetMultiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.additionalModelDataSource">AdditionalModelDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList">SagemakerModelPrimaryContainerAdditionalModelDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.additionalModelDataSourceInput">AdditionalModelDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput">ContainerHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput">ImageConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput">InferenceSpecificationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput">ModelDataSourceInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput">ModelDataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput">ModelPackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput">MultiModelConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalModelDataSource`<sup>Required</sup> <a name="AdditionalModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.additionalModelDataSource"></a>

```go
func AdditionalModelDataSource() SagemakerModelPrimaryContainerAdditionalModelDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerAdditionalModelDataSourceList">SagemakerModelPrimaryContainerAdditionalModelDataSourceList</a>

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```go
func ImageConfig() SagemakerModelPrimaryContainerImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource"></a>

```go
func ModelDataSource() SagemakerModelPrimaryContainerModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a>

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig"></a>

```go
func MultiModelConfig() SagemakerModelPrimaryContainerMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a>

---

##### `AdditionalModelDataSourceInput`<sup>Optional</sup> <a name="AdditionalModelDataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.additionalModelDataSourceInput"></a>

```go
func AdditionalModelDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerHostnameInput`<sup>Optional</sup> <a name="ContainerHostnameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput"></a>

```go
func ContainerHostnameInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput"></a>

```go
func ImageConfigInput() SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InferenceSpecificationNameInput`<sup>Optional</sup> <a name="InferenceSpecificationNameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput"></a>

```go
func InferenceSpecificationNameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ModelDataSourceInput`<sup>Optional</sup> <a name="ModelDataSourceInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput"></a>

```go
func ModelDataSourceInput() SagemakerModelPrimaryContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---

##### `ModelDataUrlInput`<sup>Optional</sup> <a name="ModelDataUrlInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput"></a>

```go
func ModelDataUrlInput() *string
```

- *Type:* *string

---

##### `ModelPackageNameInput`<sup>Optional</sup> <a name="ModelPackageNameInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput"></a>

```go
func ModelPackageNameInput() *string
```

- *Type:* *string

---

##### `MultiModelConfigInput`<sup>Optional</sup> <a name="MultiModelConfigInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput"></a>

```go
func MultiModelConfigInput() SagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```go
func ContainerHostname() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName"></a>

```go
func InferenceSpecificationName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```go
func ModelDataUrl() *string
```

- *Type:* *string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName"></a>

```go
func ModelPackageName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---


### SagemakerModelVpcConfigOutputReference <a name="SagemakerModelVpcConfigOutputReference" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/sagemakermodel"

sagemakermodel.NewSagemakerModelVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---



