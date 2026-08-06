# `outpostsCapacityTask` Submodule <a name="`outpostsCapacityTask` Submodule" id="@cdktn/provider-aws.outpostsCapacityTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsCapacityTask <a name="OutpostsCapacityTask" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task aws_outposts_capacity_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.NewOutpostsCapacityTask(scope Construct, id *string, config OutpostsCapacityTaskConfig) OutpostsCapacityTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig">OutpostsCapacityTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig">OutpostsCapacityTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool">PutInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude">PutInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId">ResetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool">ResetInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude">ResetInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId">ResetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances">ResetTaskActionOnBlockingInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstancePool` <a name="PutInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool"></a>

```go
func PutInstancePool(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstancesToExclude` <a name="PutInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude"></a>

```go
func PutInstancesToExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts"></a>

```go
func PutTimeouts(value OutpostsCapacityTaskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `ResetAssetId` <a name="ResetAssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId"></a>

```go
func ResetAssetId()
```

##### `ResetInstancePool` <a name="ResetInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool"></a>

```go
func ResetInstancePool()
```

##### `ResetInstancesToExclude` <a name="ResetInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude"></a>

```go
func ResetInstancesToExclude()
```

##### `ResetOrderId` <a name="ResetOrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId"></a>

```go
func ResetOrderId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTaskActionOnBlockingInstances` <a name="ResetTaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances"></a>

```go
func ResetTaskActionOnBlockingInstances()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.OutpostsCapacityTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.OutpostsCapacityTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.OutpostsCapacityTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.OutpostsCapacityTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OutpostsCapacityTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OutpostsCapacityTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsCapacityTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId">CapacityTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate">CompletionDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool">InstancePool</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude">InstancesToExclude</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput">AssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput">InstancePoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput">InstancesToExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput">OrderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput">OutpostIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput">TaskActionOnBlockingInstancesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier">OutpostIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances">TaskActionOnBlockingInstances</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityTaskId`<sup>Required</sup> <a name="CapacityTaskId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId"></a>

```go
func CapacityTaskId() *string
```

- *Type:* *string

---

##### `CompletionDate`<sup>Required</sup> <a name="CompletionDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate"></a>

```go
func CompletionDate() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `InstancePool`<sup>Required</sup> <a name="InstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool"></a>

```go
func InstancePool() OutpostsCapacityTaskInstancePoolList
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a>

---

##### `InstancesToExclude`<sup>Required</sup> <a name="InstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude"></a>

```go
func InstancesToExclude() OutpostsCapacityTaskInstancesToExcludeList
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts"></a>

```go
func Timeouts() OutpostsCapacityTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a>

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput"></a>

```go
func AssetIdInput() *string
```

- *Type:* *string

---

##### `InstancePoolInput`<sup>Optional</sup> <a name="InstancePoolInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput"></a>

```go
func InstancePoolInput() interface{}
```

- *Type:* interface{}

---

##### `InstancesToExcludeInput`<sup>Optional</sup> <a name="InstancesToExcludeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput"></a>

```go
func InstancesToExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput"></a>

```go
func OrderIdInput() *string
```

- *Type:* *string

---

##### `OutpostIdentifierInput`<sup>Optional</sup> <a name="OutpostIdentifierInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput"></a>

```go
func OutpostIdentifierInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TaskActionOnBlockingInstancesInput`<sup>Optional</sup> <a name="TaskActionOnBlockingInstancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput"></a>

```go
func TaskActionOnBlockingInstancesInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `OutpostIdentifier`<sup>Required</sup> <a name="OutpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier"></a>

```go
func OutpostIdentifier() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TaskActionOnBlockingInstances`<sup>Required</sup> <a name="TaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances"></a>

```go
func TaskActionOnBlockingInstances() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsCapacityTaskConfig <a name="OutpostsCapacityTaskConfig" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

&outpostscapacitytask.OutpostsCapacityTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OutpostIdentifier: *string,
	AssetId: *string,
	InstancePool: interface{},
	InstancesToExclude: interface{},
	OrderId: *string,
	Region: *string,
	TaskActionOnBlockingInstances: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v24.outpostsCapacityTask.OutpostsCapacityTaskTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier">OutpostIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId">AssetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool">InstancePool</a></code> | <code>interface{}</code> | instance_pool block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude">InstancesToExclude</a></code> | <code>interface{}</code> | instances_to_exclude block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId">OrderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances">TaskActionOnBlockingInstances</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OutpostIdentifier`<sup>Required</sup> <a name="OutpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier"></a>

```go
OutpostIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}.

---

##### `AssetId`<sup>Optional</sup> <a name="AssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId"></a>

```go
AssetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}.

---

##### `InstancePool`<sup>Optional</sup> <a name="InstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool"></a>

```go
InstancePool interface{}
```

- *Type:* interface{}

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}

---

##### `InstancesToExclude`<sup>Optional</sup> <a name="InstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude"></a>

```go
InstancesToExclude interface{}
```

- *Type:* interface{}

instances_to_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}

---

##### `OrderId`<sup>Optional</sup> <a name="OrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId"></a>

```go
OrderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}

---

##### `TaskActionOnBlockingInstances`<sup>Optional</sup> <a name="TaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances"></a>

```go
TaskActionOnBlockingInstances *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts"></a>

```go
Timeouts OutpostsCapacityTaskTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}

---

### OutpostsCapacityTaskInstancePool <a name="OutpostsCapacityTaskInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

&outpostscapacitytask.OutpostsCapacityTaskInstancePool {
	Count: *f64,
	InstanceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}.

---

### OutpostsCapacityTaskInstancesToExclude <a name="OutpostsCapacityTaskInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

&outpostscapacitytask.OutpostsCapacityTaskInstancesToExclude {
	Instances: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances">Instances</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}.

---

### OutpostsCapacityTaskTimeouts <a name="OutpostsCapacityTaskTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

&outpostscapacitytask.OutpostsCapacityTaskTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#create OutpostsCapacityTask#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/outposts_capacity_task#delete OutpostsCapacityTask#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsCapacityTaskInstancePoolList <a name="OutpostsCapacityTaskInstancePoolList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.NewOutpostsCapacityTaskInstancePoolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OutpostsCapacityTaskInstancePoolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get"></a>

```go
func Get(index *f64) OutpostsCapacityTaskInstancePoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsCapacityTaskInstancePoolOutputReference <a name="OutpostsCapacityTaskInstancePoolOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.NewOutpostsCapacityTaskInstancePoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OutpostsCapacityTaskInstancePoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsCapacityTaskInstancesToExcludeList <a name="OutpostsCapacityTaskInstancesToExcludeList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.NewOutpostsCapacityTaskInstancesToExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OutpostsCapacityTaskInstancesToExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get"></a>

```go
func Get(index *f64) OutpostsCapacityTaskInstancesToExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsCapacityTaskInstancesToExcludeOutputReference <a name="OutpostsCapacityTaskInstancesToExcludeOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.NewOutpostsCapacityTaskInstancesToExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OutpostsCapacityTaskInstancesToExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsCapacityTaskTimeoutsOutputReference <a name="OutpostsCapacityTaskTimeoutsOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/outpostscapacitytask"

outpostscapacitytask.NewOutpostsCapacityTaskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OutpostsCapacityTaskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



