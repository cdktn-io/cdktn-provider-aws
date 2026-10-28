# `sagemakerInferenceComponent` Submodule <a name="`sagemakerInferenceComponent` Submodule" id="@cdktn/provider-aws.sagemakerInferenceComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceComponent <a name="SagemakerInferenceComponent" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component aws_sagemaker_inference_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponent(scope Construct, id *string, config SagemakerInferenceComponentConfig) SagemakerInferenceComponent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig">PutDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification">PutSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications">PutSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig">ResetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification">ResetSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications">ResetSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName">ResetVariantName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentConfig` <a name="PutDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig"></a>

```go
func PutDeploymentConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpecification` <a name="PutSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification"></a>

```go
func PutSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpecifications` <a name="PutSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications"></a>

```go
func PutSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts"></a>

```go
func PutTimeouts(value SagemakerInferenceComponentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---

##### `ResetDeploymentConfig` <a name="ResetDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig"></a>

```go
func ResetDeploymentConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```

##### `ResetSpecification` <a name="ResetSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification"></a>

```go
func ResetSpecification()
```

##### `ResetSpecifications` <a name="ResetSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications"></a>

```go
func ResetSpecifications()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVariantName` <a name="ResetVariantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName"></a>

```go
func ResetVariantName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerInferenceComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerInferenceComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification">Specification</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications">Specifications</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput">DeploymentConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput">SpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput">SpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput">VariantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName">VariantName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeploymentConfig`<sup>Required</sup> <a name="DeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig"></a>

```go
func DeploymentConfig() SagemakerInferenceComponentDeploymentConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn"></a>

```go
func EndpointArn() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig"></a>

```go
func RuntimeConfig() SagemakerInferenceComponentRuntimeConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a>

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification"></a>

```go
func Specification() SagemakerInferenceComponentSpecificationList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a>

---

##### `Specifications`<sup>Required</sup> <a name="Specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications"></a>

```go
func Specifications() SagemakerInferenceComponentSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts"></a>

```go
func Timeouts() SagemakerInferenceComponentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a>

---

##### `DeploymentConfigInput`<sup>Optional</sup> <a name="DeploymentConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput"></a>

```go
func DeploymentConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SpecificationInput`<sup>Optional</sup> <a name="SpecificationInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput"></a>

```go
func SpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `SpecificationsInput`<sup>Optional</sup> <a name="SpecificationsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput"></a>

```go
func SpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput"></a>

```go
func VariantNameInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName"></a>

```go
func VariantName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceComponentConfig <a name="SagemakerInferenceComponentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointName: *string,
	Name: *string,
	DeploymentConfig: interface{},
	Region: *string,
	RuntimeConfig: interface{},
	Specification: interface{},
	Specifications: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v26.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts,
	VariantName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig">DeploymentConfig</a></code> | <code>interface{}</code> | deployment_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code>interface{}</code> | runtime_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification">Specification</a></code> | <code>interface{}</code> | specification block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications">Specifications</a></code> | <code>interface{}</code> | specifications block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName">VariantName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}.

---

##### `DeploymentConfig`<sup>Optional</sup> <a name="DeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig"></a>

```go
DeploymentConfig interface{}
```

- *Type:* interface{}

deployment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#region SagemakerInferenceComponent#region}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig"></a>

```go
RuntimeConfig interface{}
```

- *Type:* interface{}

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}

---

##### `Specification`<sup>Optional</sup> <a name="Specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification"></a>

```go
Specification interface{}
```

- *Type:* interface{}

specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}

---

##### `Specifications`<sup>Optional</sup> <a name="Specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications"></a>

```go
Specifications interface{}
```

- *Type:* interface{}

specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#specifications SagemakerInferenceComponent#specifications}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts"></a>

```go
Timeouts SagemakerInferenceComponentTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#timeouts SagemakerInferenceComponent#timeouts}

---

##### `VariantName`<sup>Optional</sup> <a name="VariantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName"></a>

```go
VariantName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}.

---

### SagemakerInferenceComponentDeploymentConfig <a name="SagemakerInferenceComponentDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfig {
	AutoRollbackConfiguration: interface{},
	RollingUpdatePolicy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code>interface{}</code> | auto_rollback_configuration block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code>interface{}</code> | rolling_update_policy block. |

---

##### `AutoRollbackConfiguration`<sup>Optional</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration"></a>

```go
AutoRollbackConfiguration interface{}
```

- *Type:* interface{}

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}

---

##### `RollingUpdatePolicy`<sup>Optional</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy"></a>

```go
RollingUpdatePolicy interface{}
```

- *Type:* interface{}

rolling_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration {
	Alarms: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms">Alarms</a></code> | <code>interface{}</code> | alarms block. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms"></a>

```go
Alarms interface{}
```

- *Type:* interface{}

alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms {
	AlarmName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName">AlarmName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}. |

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName"></a>

```go
AlarmName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy {
	WaitIntervalInSeconds: *f64,
	MaximumBatchSize: interface{},
	MaximumExecutionTimeoutInSeconds: *f64,
	RollbackMaximumBatchSize: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">MaximumBatchSize</a></code> | <code>interface{}</code> | maximum_batch_size block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code>interface{}</code> | rollback_maximum_batch_size block. |

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds"></a>

```go
WaitIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}.

---

##### `MaximumBatchSize`<sup>Optional</sup> <a name="MaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```go
MaximumBatchSize interface{}
```

- *Type:* interface{}

maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```go
MaximumExecutionTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}.

---

##### `RollbackMaximumBatchSize`<sup>Optional</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```go
RollbackMaximumBatchSize interface{}
```

- *Type:* interface{}

rollback_maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentRuntimeConfig <a name="SagemakerInferenceComponentRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentRuntimeConfig {
	CopyCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount">CopyCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}. |

---

##### `CopyCount`<sup>Required</sup> <a name="CopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount"></a>

```go
CopyCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}.

---

### SagemakerInferenceComponentRuntimeConfigPlacementStatus <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatus" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus {

}
```


### SagemakerInferenceComponentSpecification <a name="SagemakerInferenceComponentSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecification {
	BaseInferenceComponentName: *string,
	ComputeResourceRequirements: interface{},
	Container: interface{},
	DataCacheConfig: interface{},
	InstanceType: *string,
	ModelName: *string,
	SchedulingConfig: interface{},
	StartupParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code>interface{}</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container">Container</a></code> | <code>interface{}</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig">DataCacheConfig</a></code> | <code>interface{}</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName">ModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig">SchedulingConfig</a></code> | <code>interface{}</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters">StartupParameters</a></code> | <code>interface{}</code> | startup_parameters block. |

---

##### `BaseInferenceComponentName`<sup>Optional</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName"></a>

```go
BaseInferenceComponentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `ComputeResourceRequirements`<sup>Optional</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements"></a>

```go
ComputeResourceRequirements interface{}
```

- *Type:* interface{}

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container"></a>

```go
Container interface{}
```

- *Type:* interface{}

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `DataCacheConfig`<sup>Optional</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig"></a>

```go
DataCacheConfig interface{}
```

- *Type:* interface{}

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `SchedulingConfig`<sup>Optional</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig"></a>

```go
SchedulingConfig interface{}
```

- *Type:* interface{}

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `StartupParameters`<sup>Optional</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters"></a>

```go
StartupParameters interface{}
```

- *Type:* interface{}

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements {
	MinMemoryRequiredInMb: *f64,
	MaxMemoryRequiredInMb: *f64,
	NumberOfAcceleratorDevicesRequired: *f64,
	NumberOfCpuCoresRequired: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```go
MinMemoryRequiredInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `MaxMemoryRequiredInMb`<sup>Optional</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```go
MaxMemoryRequiredInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```go
NumberOfAcceleratorDevicesRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `NumberOfCpuCoresRequired`<sup>Optional</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```go
NumberOfCpuCoresRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationContainer <a name="SagemakerInferenceComponentSpecificationContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationContainer {
	ArtifactUrl: *string,
	ContainerMetricsConfig: interface{},
	Environment: *map[string]*string,
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl">ArtifactUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code>interface{}</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `ArtifactUrl`<sup>Optional</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl"></a>

```go
ArtifactUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `ContainerMetricsConfig`<sup>Optional</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig"></a>

```go
ContainerMetricsConfig interface{}
```

- *Type:* interface{}

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig {
	MetricsEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint">MetricsEndpoint</a></code> | <code>interface{}</code> | metrics_endpoint block. |

---

##### `MetricsEndpoint`<sup>Optional</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```go
MetricsEndpoint interface{}
```

- *Type:* interface{}

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint {
	MetricsEndpointPath: *string,
	MetricPublishFrequencyInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```go
MetricsEndpointPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `MetricPublishFrequencyInSeconds`<sup>Optional</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```go
MetricPublishFrequencyInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationDataCacheConfig <a name="SagemakerInferenceComponentSpecificationDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationDataCacheConfig {
	EnableCaching: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching">EnableCaching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching"></a>

```go
EnableCaching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecifications <a name="SagemakerInferenceComponentSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecifications {
	BaseInferenceComponentName: *string,
	ComputeResourceRequirements: interface{},
	Container: interface{},
	DataCacheConfig: interface{},
	InstanceType: *string,
	ModelName: *string,
	SchedulingConfig: interface{},
	StartupParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code>interface{}</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container">Container</a></code> | <code>interface{}</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig">DataCacheConfig</a></code> | <code>interface{}</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName">ModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig">SchedulingConfig</a></code> | <code>interface{}</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters">StartupParameters</a></code> | <code>interface{}</code> | startup_parameters block. |

---

##### `BaseInferenceComponentName`<sup>Optional</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName"></a>

```go
BaseInferenceComponentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `ComputeResourceRequirements`<sup>Optional</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements"></a>

```go
ComputeResourceRequirements interface{}
```

- *Type:* interface{}

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container"></a>

```go
Container interface{}
```

- *Type:* interface{}

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `DataCacheConfig`<sup>Optional</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig"></a>

```go
DataCacheConfig interface{}
```

- *Type:* interface{}

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `SchedulingConfig`<sup>Optional</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig"></a>

```go
SchedulingConfig interface{}
```

- *Type:* interface{}

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `StartupParameters`<sup>Optional</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters"></a>

```go
StartupParameters interface{}
```

- *Type:* interface{}

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationSchedulingConfig <a name="SagemakerInferenceComponentSpecificationSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationSchedulingConfig {
	PlacementStrategy: *string,
	AvailabilityZoneBalance: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy">PlacementStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code>interface{}</code> | availability_zone_balance block. |

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy"></a>

```go
PlacementStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `AvailabilityZoneBalance`<sup>Optional</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance"></a>

```go
AvailabilityZoneBalance interface{}
```

- *Type:* interface{}

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance {
	EnforcementMode: *string,
	MaxImbalance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">MaxImbalance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `MaxImbalance`<sup>Optional</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```go
MaxImbalance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements {
	MinMemoryRequiredInMb: *f64,
	MaxMemoryRequiredInMb: *f64,
	NumberOfAcceleratorDevicesRequired: *f64,
	NumberOfCpuCoresRequired: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```go
MinMemoryRequiredInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `MaxMemoryRequiredInMb`<sup>Optional</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```go
MaxMemoryRequiredInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```go
NumberOfAcceleratorDevicesRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `NumberOfCpuCoresRequired`<sup>Optional</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```go
NumberOfCpuCoresRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationsContainer <a name="SagemakerInferenceComponentSpecificationsContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsContainer {
	ArtifactUrl: *string,
	ContainerMetricsConfig: interface{},
	Environment: *map[string]*string,
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl">ArtifactUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code>interface{}</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `ArtifactUrl`<sup>Optional</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl"></a>

```go
ArtifactUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `ContainerMetricsConfig`<sup>Optional</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig"></a>

```go
ContainerMetricsConfig interface{}
```

- *Type:* interface{}

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig {
	MetricsEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint">MetricsEndpoint</a></code> | <code>interface{}</code> | metrics_endpoint block. |

---

##### `MetricsEndpoint`<sup>Optional</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```go
MetricsEndpoint interface{}
```

- *Type:* interface{}

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint {
	MetricsEndpointPath: *string,
	MetricPublishFrequencyInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```go
MetricsEndpointPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `MetricPublishFrequencyInSeconds`<sup>Optional</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```go
MetricPublishFrequencyInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationsDataCacheConfig <a name="SagemakerInferenceComponentSpecificationsDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsDataCacheConfig {
	EnableCaching: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching">EnableCaching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching"></a>

```go
EnableCaching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecificationsSchedulingConfig <a name="SagemakerInferenceComponentSpecificationsSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsSchedulingConfig {
	PlacementStrategy: *string,
	AvailabilityZoneBalance: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy">PlacementStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code>interface{}</code> | availability_zone_balance block. |

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy"></a>

```go
PlacementStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `AvailabilityZoneBalance`<sup>Optional</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance"></a>

```go
AvailabilityZoneBalance interface{}
```

- *Type:* interface{}

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance {
	EnforcementMode: *string,
	MaxImbalance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">MaxImbalance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `MaxImbalance`<sup>Optional</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```go
MaxImbalance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsStartupParameters <a name="SagemakerInferenceComponentSpecificationsStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationsStartupParameters {
	ContainerStartupHealthCheckTimeoutInSeconds: *f64,
	ModelDataDownloadTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
ContainerStartupHealthCheckTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```go
ModelDataDownloadTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentSpecificationStartupParameters <a name="SagemakerInferenceComponentSpecificationStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationStartupParameters {
	ContainerStartupHealthCheckTimeoutInSeconds: *f64,
	ModelDataDownloadTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
ContainerStartupHealthCheckTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```go
ModelDataDownloadTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentTimeouts <a name="SagemakerInferenceComponentTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#create SagemakerInferenceComponent#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#delete SagemakerInferenceComponent#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/sagemaker_inference_component#update SagemakerInferenceComponent#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput">AlarmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">AlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput"></a>

```go
func AlarmNameInput() *string
```

- *Type:* *string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```go
func AlarmName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms"></a>

```go
func PutAlarms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```go
func Alarms() SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigList <a name="SagemakerInferenceComponentDeploymentConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentDeploymentConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentDeploymentConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigOutputReference <a name="SagemakerInferenceComponentDeploymentConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentDeploymentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration">PutAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy">PutRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration">ResetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy">ResetRollingUpdatePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoRollbackConfiguration` <a name="PutAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```go
func PutAutoRollbackConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRollingUpdatePolicy` <a name="PutRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```go
func PutRollingUpdatePolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoRollbackConfiguration` <a name="ResetAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```go
func ResetAutoRollbackConfiguration()
```

##### `ResetRollingUpdatePolicy` <a name="ResetRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```go
func ResetRollingUpdatePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">AutoRollbackConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">RollingUpdatePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```go
func AutoRollbackConfiguration() SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `RollingUpdatePolicy`<sup>Required</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```go
func RollingUpdatePolicy() SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a>

---

##### `AutoRollbackConfigurationInput`<sup>Optional</sup> <a name="AutoRollbackConfigurationInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```go
func AutoRollbackConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RollingUpdatePolicyInput`<sup>Optional</sup> <a name="RollingUpdatePolicyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```go
func RollingUpdatePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">PutMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">PutRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">ResetMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">ResetMaximumExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">ResetRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaximumBatchSize` <a name="PutMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```go
func PutMaximumBatchSize(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRollbackMaximumBatchSize` <a name="PutRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```go
func PutRollbackMaximumBatchSize(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaximumBatchSize` <a name="ResetMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```go
func ResetMaximumBatchSize()
```

##### `ResetMaximumExecutionTimeoutInSeconds` <a name="ResetMaximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```go
func ResetMaximumExecutionTimeoutInSeconds()
```

##### `ResetRollbackMaximumBatchSize` <a name="ResetRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```go
func ResetRollbackMaximumBatchSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">MaximumBatchSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">MaximumExecutionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">RollbackMaximumBatchSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput">WaitIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBatchSize`<sup>Required</sup> <a name="MaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```go
func MaximumBatchSize() SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a>

---

##### `RollbackMaximumBatchSize`<sup>Required</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```go
func RollbackMaximumBatchSize() SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a>

---

##### `MaximumBatchSizeInput`<sup>Optional</sup> <a name="MaximumBatchSizeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```go
func MaximumBatchSizeInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="MaximumExecutionTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```go
func MaximumExecutionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RollbackMaximumBatchSizeInput`<sup>Optional</sup> <a name="RollbackMaximumBatchSizeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```go
func RollbackMaximumBatchSizeInput() interface{}
```

- *Type:* interface{}

---

##### `WaitIntervalInSecondsInput`<sup>Optional</sup> <a name="WaitIntervalInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput"></a>

```go
func WaitIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```go
func MaximumExecutionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```go
func WaitIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentRuntimeConfigList <a name="SagemakerInferenceComponentRuntimeConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentRuntimeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentRuntimeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentRuntimeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentRuntimeConfigOutputReference <a name="SagemakerInferenceComponentRuntimeConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount">CurrentCopyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount">DesiredCopyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus">PlacementStatus</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput">CopyCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount">CopyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentCopyCount`<sup>Required</sup> <a name="CurrentCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount"></a>

```go
func CurrentCopyCount() *f64
```

- *Type:* *f64

---

##### `DesiredCopyCount`<sup>Required</sup> <a name="DesiredCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount"></a>

```go
func DesiredCopyCount() *f64
```

- *Type:* *f64

---

##### `PlacementStatus`<sup>Required</sup> <a name="PlacementStatus" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus"></a>

```go
func PlacementStatus() SagemakerInferenceComponentRuntimeConfigPlacementStatusList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a>

---

##### `CopyCountInput`<sup>Optional</sup> <a name="CopyCountInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput"></a>

```go
func CopyCountInput() *f64
```

- *Type:* *f64

---

##### `CopyCount`<sup>Required</sup> <a name="CopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount"></a>

```go
func CopyCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusList <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentRuntimeConfigPlacementStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentRuntimeConfigPlacementStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount">CurrentCopyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentCopyCount`<sup>Required</sup> <a name="CurrentCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount"></a>

```go
func CurrentCopyCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerInferenceComponentRuntimeConfigPlacementStatus
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a>

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationComputeResourceRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationComputeResourceRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">ResetMaxMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">ResetNumberOfAcceleratorDevicesRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">ResetNumberOfCpuCoresRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryRequiredInMb` <a name="ResetMaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```go
func ResetMaxMemoryRequiredInMb()
```

##### `ResetNumberOfAcceleratorDevicesRequired` <a name="ResetNumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```go
func ResetNumberOfAcceleratorDevicesRequired()
```

##### `ResetNumberOfCpuCoresRequired` <a name="ResetNumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```go
func ResetNumberOfCpuCoresRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">MaxMemoryRequiredInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">MinMemoryRequiredInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">NumberOfAcceleratorDevicesRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">NumberOfCpuCoresRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MaxMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```go
func MaxMemoryRequiredInMbInput() *f64
```

- *Type:* *f64

---

##### `MinMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MinMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```go
func MinMemoryRequiredInMbInput() *f64
```

- *Type:* *f64

---

##### `NumberOfAcceleratorDevicesRequiredInput`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```go
func NumberOfAcceleratorDevicesRequiredInput() *f64
```

- *Type:* *f64

---

##### `NumberOfCpuCoresRequiredInput`<sup>Optional</sup> <a name="NumberOfCpuCoresRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```go
func NumberOfCpuCoresRequiredInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryRequiredInMb`<sup>Required</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```go
func MaxMemoryRequiredInMb() *f64
```

- *Type:* *f64

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```go
func MinMemoryRequiredInMb() *f64
```

- *Type:* *f64

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Required</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```go
func NumberOfAcceleratorDevicesRequired() *f64
```

- *Type:* *f64

---

##### `NumberOfCpuCoresRequired`<sup>Required</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```go
func NumberOfCpuCoresRequired() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">ResetMetricPublishFrequencyInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricPublishFrequencyInSeconds` <a name="ResetMetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```go
func ResetMetricPublishFrequencyInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">MetricPublishFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">MetricsEndpointPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricPublishFrequencyInSecondsInput`<sup>Optional</sup> <a name="MetricPublishFrequencyInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```go
func MetricPublishFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MetricsEndpointPathInput`<sup>Optional</sup> <a name="MetricsEndpointPathInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```go
func MetricsEndpointPathInput() *string
```

- *Type:* *string

---

##### `MetricPublishFrequencyInSeconds`<sup>Required</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```go
func MetricPublishFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```go
func MetricsEndpointPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">PutMetricsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">ResetMetricsEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricsEndpoint` <a name="PutMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```go
func PutMetricsEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMetricsEndpoint` <a name="ResetMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```go
func ResetMetricsEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">MetricsEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">MetricsEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsEndpoint`<sup>Required</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```go
func MetricsEndpoint() SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `MetricsEndpointInput`<sup>Optional</sup> <a name="MetricsEndpointInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```go
func MetricsEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationContainerList <a name="SagemakerInferenceComponentSpecificationContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationContainerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationContainerOutputReference <a name="SagemakerInferenceComponentSpecificationContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig">PutContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl">ResetArtifactUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig">ResetContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerMetricsConfig` <a name="PutContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig"></a>

```go
func PutContainerMetricsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArtifactUrl` <a name="ResetArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl"></a>

```go
func ResetArtifactUrl()
```

##### `ResetContainerMetricsConfig` <a name="ResetContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig"></a>

```go
func ResetContainerMetricsConfig()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage">ResolvedImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput">ArtifactUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput">ContainerMetricsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl">ArtifactUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerMetricsConfig`<sup>Required</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig"></a>

```go
func ContainerMetricsConfig() SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a>

---

##### `ResolvedImage`<sup>Required</sup> <a name="ResolvedImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage"></a>

```go
func ResolvedImage() *string
```

- *Type:* *string

---

##### `ArtifactUrlInput`<sup>Optional</sup> <a name="ArtifactUrlInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput"></a>

```go
func ArtifactUrlInput() *string
```

- *Type:* *string

---

##### `ContainerMetricsConfigInput`<sup>Optional</sup> <a name="ContainerMetricsConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput"></a>

```go
func ContainerMetricsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ArtifactUrl`<sup>Required</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl"></a>

```go
func ArtifactUrl() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationDataCacheConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationDataCacheConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput">EnableCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching">EnableCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableCachingInput`<sup>Optional</sup> <a name="EnableCachingInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput"></a>

```go
func EnableCachingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching"></a>

```go
func EnableCaching() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationList <a name="SagemakerInferenceComponentSpecificationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationOutputReference <a name="SagemakerInferenceComponentSpecificationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements">PutComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig">PutDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig">PutSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters">PutStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName">ResetBaseInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements">ResetComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig">ResetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig">ResetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters">ResetStartupParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeResourceRequirements` <a name="PutComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements"></a>

```go
func PutComputeResourceRequirements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* interface{}

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer"></a>

```go
func PutContainer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataCacheConfig` <a name="PutDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig"></a>

```go
func PutDataCacheConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedulingConfig` <a name="PutSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig"></a>

```go
func PutSchedulingConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStartupParameters` <a name="PutStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters"></a>

```go
func PutStartupParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseInferenceComponentName` <a name="ResetBaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName"></a>

```go
func ResetBaseInferenceComponentName()
```

##### `ResetComputeResourceRequirements` <a name="ResetComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements"></a>

```go
func ResetComputeResourceRequirements()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetDataCacheConfig` <a name="ResetDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig"></a>

```go
func ResetDataCacheConfig()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName"></a>

```go
func ResetModelName()
```

##### `ResetSchedulingConfig` <a name="ResetSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig"></a>

```go
func ResetSchedulingConfig()
```

##### `ResetStartupParameters` <a name="ResetStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters"></a>

```go
func ResetStartupParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig">DataCacheConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters">StartupParameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput">BaseInferenceComponentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput">ComputeResourceRequirementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput">ContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput">DataCacheConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput">SchedulingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput">StartupParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeResourceRequirements`<sup>Required</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements"></a>

```go
func ComputeResourceRequirements() SagemakerInferenceComponentSpecificationComputeResourceRequirementsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container"></a>

```go
func Container() SagemakerInferenceComponentSpecificationContainerList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a>

---

##### `DataCacheConfig`<sup>Required</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig"></a>

```go
func DataCacheConfig() SagemakerInferenceComponentSpecificationDataCacheConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a>

---

##### `SchedulingConfig`<sup>Required</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig"></a>

```go
func SchedulingConfig() SagemakerInferenceComponentSpecificationSchedulingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a>

---

##### `StartupParameters`<sup>Required</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters"></a>

```go
func StartupParameters() SagemakerInferenceComponentSpecificationStartupParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a>

---

##### `BaseInferenceComponentNameInput`<sup>Optional</sup> <a name="BaseInferenceComponentNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput"></a>

```go
func BaseInferenceComponentNameInput() *string
```

- *Type:* *string

---

##### `ComputeResourceRequirementsInput`<sup>Optional</sup> <a name="ComputeResourceRequirementsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput"></a>

```go
func ComputeResourceRequirementsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput"></a>

```go
func ContainerInput() interface{}
```

- *Type:* interface{}

---

##### `DataCacheConfigInput`<sup>Optional</sup> <a name="DataCacheConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput"></a>

```go
func DataCacheConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `SchedulingConfigInput`<sup>Optional</sup> <a name="SchedulingConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput"></a>

```go
func SchedulingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StartupParametersInput`<sup>Optional</sup> <a name="StartupParametersInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput"></a>

```go
func StartupParametersInput() interface{}
```

- *Type:* interface{}

---

##### `BaseInferenceComponentName`<sup>Required</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName"></a>

```go
func BaseInferenceComponentName() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">ResetMaxImbalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxImbalance` <a name="ResetMaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```go
func ResetMaxImbalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">MaxImbalanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">MaxImbalance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `MaxImbalanceInput`<sup>Optional</sup> <a name="MaxImbalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```go
func MaxImbalanceInput() *f64
```

- *Type:* *f64

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `MaxImbalance`<sup>Required</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```go
func MaxImbalance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationSchedulingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationSchedulingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance">PutAvailabilityZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance">ResetAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityZoneBalance` <a name="PutAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```go
func PutAvailabilityZoneBalance(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZoneBalance` <a name="ResetAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```go
func ResetAvailabilityZoneBalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">AvailabilityZoneBalanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput">PlacementStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy">PlacementStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneBalance`<sup>Required</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```go
func AvailabilityZoneBalance() SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `AvailabilityZoneBalanceInput`<sup>Optional</sup> <a name="AvailabilityZoneBalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```go
func AvailabilityZoneBalanceInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementStrategyInput`<sup>Optional</sup> <a name="PlacementStrategyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```go
func PlacementStrategyInput() *string
```

- *Type:* *string

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy"></a>

```go
func PlacementStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsComputeResourceRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">ResetMaxMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">ResetNumberOfAcceleratorDevicesRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">ResetNumberOfCpuCoresRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryRequiredInMb` <a name="ResetMaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```go
func ResetMaxMemoryRequiredInMb()
```

##### `ResetNumberOfAcceleratorDevicesRequired` <a name="ResetNumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```go
func ResetNumberOfAcceleratorDevicesRequired()
```

##### `ResetNumberOfCpuCoresRequired` <a name="ResetNumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```go
func ResetNumberOfCpuCoresRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">MaxMemoryRequiredInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">MinMemoryRequiredInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">NumberOfAcceleratorDevicesRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">NumberOfCpuCoresRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MaxMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```go
func MaxMemoryRequiredInMbInput() *f64
```

- *Type:* *f64

---

##### `MinMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MinMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```go
func MinMemoryRequiredInMbInput() *f64
```

- *Type:* *f64

---

##### `NumberOfAcceleratorDevicesRequiredInput`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```go
func NumberOfAcceleratorDevicesRequiredInput() *f64
```

- *Type:* *f64

---

##### `NumberOfCpuCoresRequiredInput`<sup>Optional</sup> <a name="NumberOfCpuCoresRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```go
func NumberOfCpuCoresRequiredInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryRequiredInMb`<sup>Required</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```go
func MaxMemoryRequiredInMb() *f64
```

- *Type:* *f64

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```go
func MinMemoryRequiredInMb() *f64
```

- *Type:* *f64

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Required</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```go
func NumberOfAcceleratorDevicesRequired() *f64
```

- *Type:* *f64

---

##### `NumberOfCpuCoresRequired`<sup>Required</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```go
func NumberOfCpuCoresRequired() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">ResetMetricPublishFrequencyInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricPublishFrequencyInSeconds` <a name="ResetMetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```go
func ResetMetricPublishFrequencyInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">MetricPublishFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">MetricsEndpointPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricPublishFrequencyInSecondsInput`<sup>Optional</sup> <a name="MetricPublishFrequencyInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```go
func MetricPublishFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MetricsEndpointPathInput`<sup>Optional</sup> <a name="MetricsEndpointPathInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```go
func MetricsEndpointPathInput() *string
```

- *Type:* *string

---

##### `MetricPublishFrequencyInSeconds`<sup>Required</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```go
func MetricPublishFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```go
func MetricsEndpointPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">PutMetricsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">ResetMetricsEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricsEndpoint` <a name="PutMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```go
func PutMetricsEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMetricsEndpoint` <a name="ResetMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```go
func ResetMetricsEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">MetricsEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">MetricsEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsEndpoint`<sup>Required</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```go
func MetricsEndpoint() SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `MetricsEndpointInput`<sup>Optional</sup> <a name="MetricsEndpointInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```go
func MetricsEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsContainerList <a name="SagemakerInferenceComponentSpecificationsContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsContainerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsContainerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsContainerOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig">PutContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl">ResetArtifactUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig">ResetContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerMetricsConfig` <a name="PutContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig"></a>

```go
func PutContainerMetricsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArtifactUrl` <a name="ResetArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl"></a>

```go
func ResetArtifactUrl()
```

##### `ResetContainerMetricsConfig` <a name="ResetContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig"></a>

```go
func ResetContainerMetricsConfig()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage">ResolvedImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput">ArtifactUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput">ContainerMetricsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl">ArtifactUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerMetricsConfig`<sup>Required</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig"></a>

```go
func ContainerMetricsConfig() SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a>

---

##### `ResolvedImage`<sup>Required</sup> <a name="ResolvedImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage"></a>

```go
func ResolvedImage() *string
```

- *Type:* *string

---

##### `ArtifactUrlInput`<sup>Optional</sup> <a name="ArtifactUrlInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput"></a>

```go
func ArtifactUrlInput() *string
```

- *Type:* *string

---

##### `ContainerMetricsConfigInput`<sup>Optional</sup> <a name="ContainerMetricsConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput"></a>

```go
func ContainerMetricsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ArtifactUrl`<sup>Required</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl"></a>

```go
func ArtifactUrl() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsDataCacheConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsDataCacheConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput">EnableCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching">EnableCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableCachingInput`<sup>Optional</sup> <a name="EnableCachingInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput"></a>

```go
func EnableCachingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching"></a>

```go
func EnableCaching() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsList <a name="SagemakerInferenceComponentSpecificationsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsOutputReference <a name="SagemakerInferenceComponentSpecificationsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements">PutComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig">PutDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig">PutSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters">PutStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName">ResetBaseInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements">ResetComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig">ResetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig">ResetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters">ResetStartupParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeResourceRequirements` <a name="PutComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements"></a>

```go
func PutComputeResourceRequirements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* interface{}

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer"></a>

```go
func PutContainer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataCacheConfig` <a name="PutDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig"></a>

```go
func PutDataCacheConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedulingConfig` <a name="PutSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig"></a>

```go
func PutSchedulingConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStartupParameters` <a name="PutStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters"></a>

```go
func PutStartupParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseInferenceComponentName` <a name="ResetBaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName"></a>

```go
func ResetBaseInferenceComponentName()
```

##### `ResetComputeResourceRequirements` <a name="ResetComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements"></a>

```go
func ResetComputeResourceRequirements()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetDataCacheConfig` <a name="ResetDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig"></a>

```go
func ResetDataCacheConfig()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName"></a>

```go
func ResetModelName()
```

##### `ResetSchedulingConfig` <a name="ResetSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig"></a>

```go
func ResetSchedulingConfig()
```

##### `ResetStartupParameters` <a name="ResetStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters"></a>

```go
func ResetStartupParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig">DataCacheConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters">StartupParameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput">BaseInferenceComponentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput">ComputeResourceRequirementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput">ContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput">DataCacheConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput">SchedulingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput">StartupParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeResourceRequirements`<sup>Required</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements"></a>

```go
func ComputeResourceRequirements() SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container"></a>

```go
func Container() SagemakerInferenceComponentSpecificationsContainerList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a>

---

##### `DataCacheConfig`<sup>Required</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig"></a>

```go
func DataCacheConfig() SagemakerInferenceComponentSpecificationsDataCacheConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a>

---

##### `SchedulingConfig`<sup>Required</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig"></a>

```go
func SchedulingConfig() SagemakerInferenceComponentSpecificationsSchedulingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a>

---

##### `StartupParameters`<sup>Required</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters"></a>

```go
func StartupParameters() SagemakerInferenceComponentSpecificationsStartupParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a>

---

##### `BaseInferenceComponentNameInput`<sup>Optional</sup> <a name="BaseInferenceComponentNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput"></a>

```go
func BaseInferenceComponentNameInput() *string
```

- *Type:* *string

---

##### `ComputeResourceRequirementsInput`<sup>Optional</sup> <a name="ComputeResourceRequirementsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput"></a>

```go
func ComputeResourceRequirementsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput"></a>

```go
func ContainerInput() interface{}
```

- *Type:* interface{}

---

##### `DataCacheConfigInput`<sup>Optional</sup> <a name="DataCacheConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput"></a>

```go
func DataCacheConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `SchedulingConfigInput`<sup>Optional</sup> <a name="SchedulingConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput"></a>

```go
func SchedulingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StartupParametersInput`<sup>Optional</sup> <a name="StartupParametersInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput"></a>

```go
func StartupParametersInput() interface{}
```

- *Type:* interface{}

---

##### `BaseInferenceComponentName`<sup>Required</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName"></a>

```go
func BaseInferenceComponentName() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">ResetMaxImbalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxImbalance` <a name="ResetMaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```go
func ResetMaxImbalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">MaxImbalanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">MaxImbalance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `MaxImbalanceInput`<sup>Optional</sup> <a name="MaxImbalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```go
func MaxImbalanceInput() *f64
```

- *Type:* *f64

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `MaxImbalance`<sup>Required</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```go
func MaxImbalance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsSchedulingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsSchedulingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance">PutAvailabilityZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance">ResetAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityZoneBalance` <a name="PutAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```go
func PutAvailabilityZoneBalance(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZoneBalance` <a name="ResetAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```go
func ResetAvailabilityZoneBalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">AvailabilityZoneBalanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput">PlacementStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy">PlacementStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneBalance`<sup>Required</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```go
func AvailabilityZoneBalance() SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `AvailabilityZoneBalanceInput`<sup>Optional</sup> <a name="AvailabilityZoneBalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```go
func AvailabilityZoneBalanceInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementStrategyInput`<sup>Optional</sup> <a name="PlacementStrategyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```go
func PlacementStrategyInput() *string
```

- *Type:* *string

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy"></a>

```go
func PlacementStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsStartupParametersList <a name="SagemakerInferenceComponentSpecificationsStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsStartupParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationsStartupParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationsStartupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationsStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationsStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationsStartupParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationsStartupParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```go
func ResetModelDataDownloadTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```go
func ContainerStartupHealthCheckTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```go
func ModelDataDownloadTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ContainerStartupHealthCheckTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```go
func ModelDataDownloadTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationStartupParametersList <a name="SagemakerInferenceComponentSpecificationStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationStartupParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentSpecificationStartupParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentSpecificationStartupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationStartupParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentSpecificationStartupParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```go
func ResetModelDataDownloadTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```go
func ContainerStartupHealthCheckTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```go
func ModelDataDownloadTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ContainerStartupHealthCheckTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```go
func ModelDataDownloadTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentTimeoutsOutputReference <a name="SagemakerInferenceComponentTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



