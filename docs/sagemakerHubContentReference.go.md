# `sagemakerHubContentReference` Submodule <a name="`sagemakerHubContentReference` Submodule" id="@cdktn/provider-aws.sagemakerHubContentReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerHubContentReference <a name="SagemakerHubContentReference" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference aws_sagemaker_hub_content_reference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

sagemakerhubcontentreference.NewSagemakerHubContentReference(scope Construct, id *string, config SagemakerHubContentReferenceConfig) SagemakerHubContentReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig">SagemakerHubContentReferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig">SagemakerHubContentReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetMinVersion">ResetMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts"></a>

```go
func PutTimeouts(value SagemakerHubContentReferenceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

---

##### `ResetMinVersion` <a name="ResetMinVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetMinVersion"></a>

```go
func ResetMinVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerHubContentReference resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

sagemakerhubcontentreference.SagemakerHubContentReference_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

sagemakerhubcontentreference.SagemakerHubContentReference_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

sagemakerhubcontentreference.SagemakerHubContentReference_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

sagemakerhubcontentreference.SagemakerHubContentReference_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerHubContentReference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerHubContentReference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerHubContentReference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerHubContentReference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubArn">HubArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentStatus">HubContentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentVersion">HubContentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference">SagemakerHubContentReferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentNameInput">HubContentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubNameInput">HubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersionInput">MinVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArnInput">SagemakerPublicHubContentArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentName">HubContentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubName">HubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersion">MinVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArn">SagemakerPublicHubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HubArn`<sup>Required</sup> <a name="HubArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubArn"></a>

```go
func HubArn() *string
```

- *Type:* *string

---

##### `HubContentArn`<sup>Required</sup> <a name="HubContentArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentArn"></a>

```go
func HubContentArn() *string
```

- *Type:* *string

---

##### `HubContentStatus`<sup>Required</sup> <a name="HubContentStatus" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentStatus"></a>

```go
func HubContentStatus() *string
```

- *Type:* *string

---

##### `HubContentVersion`<sup>Required</sup> <a name="HubContentVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentVersion"></a>

```go
func HubContentVersion() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeouts"></a>

```go
func Timeouts() SagemakerHubContentReferenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference">SagemakerHubContentReferenceTimeoutsOutputReference</a>

---

##### `HubContentNameInput`<sup>Optional</sup> <a name="HubContentNameInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentNameInput"></a>

```go
func HubContentNameInput() *string
```

- *Type:* *string

---

##### `HubNameInput`<sup>Optional</sup> <a name="HubNameInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubNameInput"></a>

```go
func HubNameInput() *string
```

- *Type:* *string

---

##### `MinVersionInput`<sup>Optional</sup> <a name="MinVersionInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersionInput"></a>

```go
func MinVersionInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SagemakerPublicHubContentArnInput`<sup>Optional</sup> <a name="SagemakerPublicHubContentArnInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArnInput"></a>

```go
func SagemakerPublicHubContentArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `HubContentName`<sup>Required</sup> <a name="HubContentName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubContentName"></a>

```go
func HubContentName() *string
```

- *Type:* *string

---

##### `HubName`<sup>Required</sup> <a name="HubName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.hubName"></a>

```go
func HubName() *string
```

- *Type:* *string

---

##### `MinVersion`<sup>Required</sup> <a name="MinVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.minVersion"></a>

```go
func MinVersion() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SagemakerPublicHubContentArn`<sup>Required</sup> <a name="SagemakerPublicHubContentArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.sagemakerPublicHubContentArn"></a>

```go
func SagemakerPublicHubContentArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReference.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerHubContentReferenceConfig <a name="SagemakerHubContentReferenceConfig" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

&sagemakerhubcontentreference.SagemakerHubContentReferenceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HubContentName: *string,
	HubName: *string,
	SagemakerPublicHubContentArn: *string,
	MinVersion: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubContentName">HubContentName</a></code> | <code>*string</code> | Name of the hub content reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubName">HubName</a></code> | <code>*string</code> | Name of the private SageMaker Hub to add the content reference to. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.sagemakerPublicHubContentArn">SagemakerPublicHubContentArn</a></code> | <code>*string</code> | ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.minVersion">MinVersion</a></code> | <code>*string</code> | Minimum version of the hub content to reference. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HubContentName`<sup>Required</sup> <a name="HubContentName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubContentName"></a>

```go
HubContentName *string
```

- *Type:* *string

Name of the hub content reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#hub_content_name SagemakerHubContentReference#hub_content_name}

---

##### `HubName`<sup>Required</sup> <a name="HubName" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.hubName"></a>

```go
HubName *string
```

- *Type:* *string

Name of the private SageMaker Hub to add the content reference to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#hub_name SagemakerHubContentReference#hub_name}

---

##### `SagemakerPublicHubContentArn`<sup>Required</sup> <a name="SagemakerPublicHubContentArn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.sagemakerPublicHubContentArn"></a>

```go
SagemakerPublicHubContentArn *string
```

- *Type:* *string

ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#sagemaker_public_hub_content_arn SagemakerHubContentReference#sagemaker_public_hub_content_arn}

---

##### `MinVersion`<sup>Optional</sup> <a name="MinVersion" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.minVersion"></a>

```go
MinVersion *string
```

- *Type:* *string

Minimum version of the hub content to reference.

Use "1.0.0" to support all versions. Changing this value to an empty string forces replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#min_version SagemakerHubContentReference#min_version}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#region SagemakerHubContentReference#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceConfig.property.timeouts"></a>

```go
Timeouts SagemakerHubContentReferenceTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts">SagemakerHubContentReferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#timeouts SagemakerHubContentReference#timeouts}

---

### SagemakerHubContentReferenceTimeouts <a name="SagemakerHubContentReferenceTimeouts" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

&sagemakerhubcontentreference.SagemakerHubContentReferenceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#create SagemakerHubContentReference#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#delete SagemakerHubContentReference#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sagemaker_hub_content_reference#update SagemakerHubContentReference#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerHubContentReferenceTimeoutsOutputReference <a name="SagemakerHubContentReferenceTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sagemakerhubcontentreference"

sagemakerhubcontentreference.NewSagemakerHubContentReferenceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerHubContentReferenceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerHubContentReference.SagemakerHubContentReferenceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



