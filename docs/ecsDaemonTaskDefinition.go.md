# `ecsDaemonTaskDefinition` Submodule <a name="`ecsDaemonTaskDefinition` Submodule" id="@cdktn/provider-aws.ecsDaemonTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemonTaskDefinition <a name="EcsDaemonTaskDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition aws_ecs_daemon_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinition(scope Construct, id *string, config EcsDaemonTaskDefinitionConfig) EcsDaemonTaskDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig">EcsDaemonTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig">EcsDaemonTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition">PutContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition">ResetContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn">ResetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerDefinition` <a name="PutContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition"></a>

```go
func PutContainerDefinition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolume` <a name="PutVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume"></a>

```go
func PutVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerDefinition` <a name="ResetContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition"></a>

```go
func ResetContainerDefinition()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaskRoleArn` <a name="ResetTaskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn"></a>

```go
func ResetTaskRoleArn()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume"></a>

```go
func ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.EcsDaemonTaskDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.EcsDaemonTaskDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.EcsDaemonTaskDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.EcsDaemonTaskDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EcsDaemonTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EcsDaemonTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemonTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition">ContainerDefinition</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume">Volume</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput">ContainerDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput">TaskRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput">VolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ContainerDefinition`<sup>Required</sup> <a name="ContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition"></a>

```go
func ContainerDefinition() EcsDaemonTaskDefinitionContainerDefinitionList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume"></a>

```go
func Volume() EcsDaemonTaskDefinitionVolumeList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a>

---

##### `ContainerDefinitionInput`<sup>Optional</sup> <a name="ContainerDefinitionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput"></a>

```go
func ContainerDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskRoleArnInput`<sup>Optional</sup> <a name="TaskRoleArnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput"></a>

```go
func TaskRoleArnInput() *string
```

- *Type:* *string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput"></a>

```go
func VolumeInput() interface{}
```

- *Type:* interface{}

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn"></a>

```go
func TaskRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonTaskDefinitionConfig <a name="EcsDaemonTaskDefinitionConfig" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Family: *string,
	ContainerDefinition: interface{},
	Cpu: *string,
	ExecutionRoleArn: *string,
	Memory: *string,
	Region: *string,
	Tags: *map[string]*string,
	TaskRoleArn: *string,
	Volume: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family">Family</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition">ContainerDefinition</a></code> | <code>interface{}</code> | container_definition block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu">Cpu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume">Volume</a></code> | <code>interface{}</code> | volume block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family"></a>

```go
Family *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}.

---

##### `ContainerDefinition`<sup>Optional</sup> <a name="ContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition"></a>

```go
ContainerDefinition interface{}
```

- *Type:* interface{}

container_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_definition EcsDaemonTaskDefinition#container_definition}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#region EcsDaemonTaskDefinition#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}.

---

##### `TaskRoleArn`<sup>Optional</sup> <a name="TaskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn"></a>

```go
TaskRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume"></a>

```go
Volume interface{}
```

- *Type:* interface{}

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#volume EcsDaemonTaskDefinition#volume}

---

### EcsDaemonTaskDefinitionContainerDefinition <a name="EcsDaemonTaskDefinitionContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinition {
	Image: *string,
	Command: *[]*string,
	Cpu: *f64,
	DependsOn: interface{},
	EntryPoint: *[]*string,
	Environment: interface{},
	EnvironmentFile: interface{},
	Essential: interface{},
	FirelensConfiguration: interface{},
	HealthCheck: interface{},
	Interactive: interface{},
	LinuxParameters: interface{},
	LogConfiguration: interface{},
	Memory: *f64,
	MemoryReservation: *f64,
	MountPoint: interface{},
	Name: *string,
	Privileged: interface{},
	PseudoTerminal: interface{},
	ReadonlyRootFilesystem: interface{},
	RepositoryCredentials: interface{},
	RestartPolicy: interface{},
	Secret: interface{},
	StartTimeout: *f64,
	StopTimeout: *f64,
	SystemControl: interface{},
	Ulimit: interface{},
	User: *string,
	WorkingDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command">Command</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu">Cpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn">DependsOn</a></code> | <code>interface{}</code> | depends_on block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint">EntryPoint</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment">Environment</a></code> | <code>interface{}</code> | environment block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile">EnvironmentFile</a></code> | <code>interface{}</code> | environment_file block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential">Essential</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration">FirelensConfiguration</a></code> | <code>interface{}</code> | firelens_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck">HealthCheck</a></code> | <code>interface{}</code> | health_check block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive">Interactive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters">LinuxParameters</a></code> | <code>interface{}</code> | linux_parameters block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration">LogConfiguration</a></code> | <code>interface{}</code> | log_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory">Memory</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint">MountPoint</a></code> | <code>interface{}</code> | mount_point block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged">Privileged</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal">PseudoTerminal</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem">ReadonlyRootFilesystem</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials">RepositoryCredentials</a></code> | <code>interface{}</code> | repository_credentials block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy">RestartPolicy</a></code> | <code>interface{}</code> | restart_policy block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout">StartTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout">StopTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl">SystemControl</a></code> | <code>interface{}</code> | system_control block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit">Ulimit</a></code> | <code>interface{}</code> | ulimit block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn"></a>

```go
DependsOn interface{}
```

- *Type:* interface{}

depends_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#depends_on EcsDaemonTaskDefinition#depends_on}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint"></a>

```go
EntryPoint *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment"></a>

```go
Environment interface{}
```

- *Type:* interface{}

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#environment EcsDaemonTaskDefinition#environment}

---

##### `EnvironmentFile`<sup>Optional</sup> <a name="EnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile"></a>

```go
EnvironmentFile interface{}
```

- *Type:* interface{}

environment_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#environment_file EcsDaemonTaskDefinition#environment_file}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}.

---

##### `FirelensConfiguration`<sup>Optional</sup> <a name="FirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration"></a>

```go
FirelensConfiguration interface{}
```

- *Type:* interface{}

firelens_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#firelens_configuration EcsDaemonTaskDefinition#firelens_configuration}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck"></a>

```go
HealthCheck interface{}
```

- *Type:* interface{}

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#health_check EcsDaemonTaskDefinition#health_check}

---

##### `Interactive`<sup>Optional</sup> <a name="Interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive"></a>

```go
Interactive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}.

---

##### `LinuxParameters`<sup>Optional</sup> <a name="LinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters"></a>

```go
LinuxParameters interface{}
```

- *Type:* interface{}

linux_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#linux_parameters EcsDaemonTaskDefinition#linux_parameters}

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration"></a>

```go
LogConfiguration interface{}
```

- *Type:* interface{}

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#log_configuration EcsDaemonTaskDefinition#log_configuration}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation"></a>

```go
MemoryReservation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}.

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint"></a>

```go
MountPoint interface{}
```

- *Type:* interface{}

mount_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#mount_point EcsDaemonTaskDefinition#mount_point}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `Privileged`<sup>Optional</sup> <a name="Privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged"></a>

```go
Privileged interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}.

---

##### `PseudoTerminal`<sup>Optional</sup> <a name="PseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal"></a>

```go
PseudoTerminal interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}.

---

##### `ReadonlyRootFilesystem`<sup>Optional</sup> <a name="ReadonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem"></a>

```go
ReadonlyRootFilesystem interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}.

---

##### `RepositoryCredentials`<sup>Optional</sup> <a name="RepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials"></a>

```go
RepositoryCredentials interface{}
```

- *Type:* interface{}

repository_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#repository_credentials EcsDaemonTaskDefinition#repository_credentials}

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy"></a>

```go
RestartPolicy interface{}
```

- *Type:* interface{}

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#restart_policy EcsDaemonTaskDefinition#restart_policy}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#secret EcsDaemonTaskDefinition#secret}

---

##### `StartTimeout`<sup>Optional</sup> <a name="StartTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout"></a>

```go
StartTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}.

---

##### `StopTimeout`<sup>Optional</sup> <a name="StopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout"></a>

```go
StopTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}.

---

##### `SystemControl`<sup>Optional</sup> <a name="SystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl"></a>

```go
SystemControl interface{}
```

- *Type:* interface{}

system_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#system_control EcsDaemonTaskDefinition#system_control}

---

##### `Ulimit`<sup>Optional</sup> <a name="Ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit"></a>

```go
Ulimit interface{}
```

- *Type:* interface{}

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#ulimit EcsDaemonTaskDefinition#ulimit}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}.

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory"></a>

```go
WorkingDirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}.

---

### EcsDaemonTaskDefinitionContainerDefinitionDependsOn <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn {
	Condition: *string,
	ContainerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironment <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration {
	Type: *string,
	Options: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options">Options</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionHealthCheck <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck {
	Command: *[]*string,
	Interval: *f64,
	Retries: *f64,
	StartPeriod: *f64,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command">Command</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries">Retries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod">StartPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}. |

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}.

---

##### `StartPeriod`<sup>Optional</sup> <a name="StartPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod"></a>

```go
StartPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters {
	Capabilities: interface{},
	Device: interface{},
	InitProcessEnabled: interface{},
	Tmpfs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities">Capabilities</a></code> | <code>interface{}</code> | capabilities block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device">Device</a></code> | <code>interface{}</code> | device block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled">InitProcessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs">Tmpfs</a></code> | <code>interface{}</code> | tmpfs block. |

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities"></a>

```go
Capabilities interface{}
```

- *Type:* interface{}

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#capabilities EcsDaemonTaskDefinition#capabilities}

---

##### `Device`<sup>Optional</sup> <a name="Device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device"></a>

```go
Device interface{}
```

- *Type:* interface{}

device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#device EcsDaemonTaskDefinition#device}

---

##### `InitProcessEnabled`<sup>Optional</sup> <a name="InitProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled"></a>

```go
InitProcessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}.

---

##### `Tmpfs`<sup>Optional</sup> <a name="Tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs"></a>

```go
Tmpfs interface{}
```

- *Type:* interface{}

tmpfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#tmpfs EcsDaemonTaskDefinition#tmpfs}

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities {
	Add: *[]*string,
	Drop: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add">Add</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop">Drop</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add"></a>

```go
Add *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}.

---

##### `Drop`<sup>Optional</sup> <a name="Drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop"></a>

```go
Drop *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice {
	HostPath: *string,
	ContainerPath: *string,
	Permissions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath">HostPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath">ContainerPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions">Permissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}. |

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath"></a>

```go
HostPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}.

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath"></a>

```go
ContainerPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs {
	ContainerPath: *string,
	Size: *f64,
	MountOptions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath">ContainerPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}. |

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath"></a>

```go
ContainerPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions"></a>

```go
MountOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration {
	LogDriver: *string,
	Options: *map[string]*string,
	SecretOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver">LogDriver</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options">Options</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption">SecretOption</a></code> | <code>interface{}</code> | secret_option block. |

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver"></a>

```go
LogDriver *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

##### `SecretOption`<sup>Optional</sup> <a name="SecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption"></a>

```go
SecretOption interface{}
```

- *Type:* interface{}

secret_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#secret_option EcsDaemonTaskDefinition#secret_option}

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption {
	Name: *string,
	ValueFrom: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom"></a>

```go
ValueFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionMountPoint <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint {
	ContainerPath: *string,
	ReadOnly: interface{},
	SourceVolume: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath">ContainerPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume">SourceVolume</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}. |

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath"></a>

```go
ContainerPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}.

---

##### `SourceVolume`<sup>Optional</sup> <a name="SourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume"></a>

```go
SourceVolume *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials {
	CredentialsParameter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}. |

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter"></a>

```go
CredentialsParameter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy {
	Enabled: interface{},
	IgnoredExitCodes: *[]*f64,
	RestartAttemptPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes">IgnoredExitCodes</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod">RestartAttemptPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}.

---

##### `IgnoredExitCodes`<sup>Optional</sup> <a name="IgnoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes"></a>

```go
IgnoredExitCodes *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}.

---

##### `RestartAttemptPeriod`<sup>Optional</sup> <a name="RestartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod"></a>

```go
RestartAttemptPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSecret <a name="EcsDaemonTaskDefinitionContainerDefinitionSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret {
	Name: *string,
	ValueFrom: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom"></a>

```go
ValueFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSystemControl <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl {
	Namespace: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionUlimit <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit {
	HardLimit: *f64,
	Name: *string,
	SoftLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit">HardLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit">SoftLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}. |

---

##### `HardLimit`<sup>Required</sup> <a name="HardLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit"></a>

```go
HardLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `SoftLimit`<sup>Required</sup> <a name="SoftLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit"></a>

```go
SoftLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}.

---

### EcsDaemonTaskDefinitionVolume <a name="EcsDaemonTaskDefinitionVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionVolume {
	Name: *string,
	Host: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host">Host</a></code> | <code>interface{}</code> | host block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host"></a>

```go
Host interface{}
```

- *Type:* interface{}

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#host EcsDaemonTaskDefinition#host}

---

### EcsDaemonTaskDefinitionVolumeHost <a name="EcsDaemonTaskDefinitionVolumeHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

&ecsdaemontaskdefinition.EcsDaemonTaskDefinitionVolumeHost {
	SourcePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath">SourcePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}. |

---

##### `SourcePath`<sup>Optional</sup> <a name="SourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath"></a>

```go
SourcePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonTaskDefinitionContainerDefinitionDependsOnList <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionDependsOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionDependsOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions"></a>

```go
func ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionHealthCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod">ResetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetStartPeriod` <a name="ResetStartPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod"></a>

```go
func ResetStartPeriod()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput">StartPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod">StartPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `StartPeriodInput`<sup>Optional</sup> <a name="StartPeriodInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput"></a>

```go
func StartPeriodInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `StartPeriod`<sup>Required</sup> <a name="StartPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod"></a>

```go
func StartPeriod() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop">ResetDrop</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetDrop` <a name="ResetDrop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop"></a>

```go
func ResetDrop()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput">AddInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput">DropInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add">Add</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop">Drop</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput"></a>

```go
func AddInput() *[]*string
```

- *Type:* *[]*string

---

##### `DropInput`<sup>Optional</sup> <a name="DropInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput"></a>

```go
func DropInput() *[]*string
```

- *Type:* *[]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add"></a>

```go
func Add() *[]*string
```

- *Type:* *[]*string

---

##### `Drop`<sup>Required</sup> <a name="Drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```go
func Drop() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath"></a>

```go
func ResetContainerPath()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput">HostPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath">HostPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput"></a>

```go
func ContainerPathInput() *string
```

- *Type:* *string

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput"></a>

```go
func HostPathInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath"></a>

```go
func HostPath() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice">PutDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs">PutTmpfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice">ResetDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled">ResetInitProcessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs">ResetTmpfs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities"></a>

```go
func PutCapabilities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDevice` <a name="PutDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice"></a>

```go
func PutDevice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTmpfs` <a name="PutTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs"></a>

```go
func PutTmpfs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetDevice` <a name="ResetDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice"></a>

```go
func ResetDevice()
```

##### `ResetInitProcessEnabled` <a name="ResetInitProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled"></a>

```go
func ResetInitProcessEnabled()
```

##### `ResetTmpfs` <a name="ResetTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs"></a>

```go
func ResetTmpfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device">Device</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs">Tmpfs</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput">DeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput">InitProcessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput">TmpfsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled">InitProcessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities"></a>

```go
func Capabilities() EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a>

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device"></a>

```go
func Device() EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a>

---

##### `Tmpfs`<sup>Required</sup> <a name="Tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs"></a>

```go
func Tmpfs() EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceInput`<sup>Optional</sup> <a name="DeviceInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput"></a>

```go
func DeviceInput() interface{}
```

- *Type:* interface{}

---

##### `InitProcessEnabledInput`<sup>Optional</sup> <a name="InitProcessEnabledInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput"></a>

```go
func InitProcessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TmpfsInput`<sup>Optional</sup> <a name="TmpfsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput"></a>

```go
func TmpfsInput() interface{}
```

- *Type:* interface{}

---

##### `InitProcessEnabled`<sup>Required</sup> <a name="InitProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled"></a>

```go
func InitProcessEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput"></a>

```go
func ContainerPathInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```go
func MountOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionList <a name="EcsDaemonTaskDefinitionContainerDefinitionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption">PutSecretOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption">ResetSecretOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretOption` <a name="PutSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption"></a>

```go
func PutSecretOption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetSecretOption` <a name="ResetSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption"></a>

```go
func ResetSecretOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption">SecretOption</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput">LogDriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput">SecretOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver">LogDriver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretOption`<sup>Required</sup> <a name="SecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption"></a>

```go
func SecretOption() EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a>

---

##### `LogDriverInput`<sup>Optional</sup> <a name="LogDriverInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput"></a>

```go
func LogDriverInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretOptionInput`<sup>Optional</sup> <a name="SecretOptionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput"></a>

```go
func SecretOptionInput() interface{}
```

- *Type:* interface{}

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver"></a>

```go
func LogDriver() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```go
func ValueFromInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointList <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionMountPointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionMountPointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume">ResetSourceVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath"></a>

```go
func ResetContainerPath()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetSourceVolume` <a name="ResetSourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume"></a>

```go
func ResetSourceVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput">SourceVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume">SourceVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput"></a>

```go
func ContainerPathInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `SourceVolumeInput`<sup>Optional</sup> <a name="SourceVolumeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput"></a>

```go
func SourceVolumeInput() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `SourceVolume`<sup>Required</sup> <a name="SourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume"></a>

```go
func SourceVolume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn">PutDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile">PutEnvironmentFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration">PutFirelensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters">PutLinuxParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint">PutMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials">PutRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy">PutRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl">PutSystemControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit">PutUlimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile">ResetEnvironmentFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration">ResetFirelensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive">ResetInteractive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters">ResetLinuxParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged">ResetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal">ResetPseudoTerminal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem">ResetReadonlyRootFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials">ResetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy">ResetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout">ResetStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout">ResetStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl">ResetSystemControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit">ResetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser">ResetUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependsOn` <a name="PutDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn"></a>

```go
func PutDependsOn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironmentFile` <a name="PutEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile"></a>

```go
func PutEnvironmentFile(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFirelensConfiguration` <a name="PutFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration"></a>

```go
func PutFirelensConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck"></a>

```go
func PutHealthCheck(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLinuxParameters` <a name="PutLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters"></a>

```go
func PutLinuxParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration"></a>

```go
func PutLogConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMountPoint` <a name="PutMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint"></a>

```go
func PutMountPoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRepositoryCredentials` <a name="PutRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials"></a>

```go
func PutRepositoryCredentials(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRestartPolicy` <a name="PutRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy"></a>

```go
func PutRestartPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSystemControl` <a name="PutSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl"></a>

```go
func PutSystemControl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUlimit` <a name="PutUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit"></a>

```go
func PutUlimit(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn"></a>

```go
func ResetDependsOn()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint"></a>

```go
func ResetEntryPoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetEnvironmentFile` <a name="ResetEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile"></a>

```go
func ResetEnvironmentFile()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetFirelensConfiguration` <a name="ResetFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration"></a>

```go
func ResetFirelensConfiguration()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetInteractive` <a name="ResetInteractive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive"></a>

```go
func ResetInteractive()
```

##### `ResetLinuxParameters` <a name="ResetLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters"></a>

```go
func ResetLinuxParameters()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration"></a>

```go
func ResetLogConfiguration()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation"></a>

```go
func ResetMemoryReservation()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint"></a>

```go
func ResetMountPoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPrivileged` <a name="ResetPrivileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged"></a>

```go
func ResetPrivileged()
```

##### `ResetPseudoTerminal` <a name="ResetPseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal"></a>

```go
func ResetPseudoTerminal()
```

##### `ResetReadonlyRootFilesystem` <a name="ResetReadonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem"></a>

```go
func ResetReadonlyRootFilesystem()
```

##### `ResetRepositoryCredentials` <a name="ResetRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials"></a>

```go
func ResetRepositoryCredentials()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy"></a>

```go
func ResetRestartPolicy()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetStartTimeout` <a name="ResetStartTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout"></a>

```go
func ResetStartTimeout()
```

##### `ResetStopTimeout` <a name="ResetStopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout"></a>

```go
func ResetStopTimeout()
```

##### `ResetSystemControl` <a name="ResetSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl"></a>

```go
func ResetSystemControl()
```

##### `ResetUlimit` <a name="ResetUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit"></a>

```go
func ResetUlimit()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser"></a>

```go
func ResetUser()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory"></a>

```go
func ResetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn">DependsOn</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile">EnvironmentFile</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration">FirelensConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters">LinuxParameters</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint">MountPoint</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy">RestartPolicy</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl">SystemControl</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit">Ulimit</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput">EnvironmentFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput">FirelensConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput">InteractiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput">LinuxParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput">PrivilegedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput">PseudoTerminalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput">ReadonlyRootFilesystemInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput">RepositoryCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput">StartTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput">StopTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput">SystemControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput">UlimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint">EntryPoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive">Interactive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation">MemoryReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged">Privileged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal">PseudoTerminal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem">ReadonlyRootFilesystem</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout">StartTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout">StopTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn"></a>

```go
func DependsOn() EcsDaemonTaskDefinitionContainerDefinitionDependsOnList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment"></a>

```go
func Environment() EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a>

---

##### `EnvironmentFile`<sup>Required</sup> <a name="EnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile"></a>

```go
func EnvironmentFile() EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a>

---

##### `FirelensConfiguration`<sup>Required</sup> <a name="FirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration"></a>

```go
func FirelensConfiguration() EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck"></a>

```go
func HealthCheck() EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a>

---

##### `LinuxParameters`<sup>Required</sup> <a name="LinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters"></a>

```go
func LinuxParameters() EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration"></a>

```go
func LogConfiguration() EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a>

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint"></a>

```go
func MountPoint() EcsDaemonTaskDefinitionContainerDefinitionMountPointList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a>

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials"></a>

```go
func RepositoryCredentials() EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a>

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy"></a>

```go
func RestartPolicy() EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret"></a>

```go
func Secret() EcsDaemonTaskDefinitionContainerDefinitionSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a>

---

##### `SystemControl`<sup>Required</sup> <a name="SystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl"></a>

```go
func SystemControl() EcsDaemonTaskDefinitionContainerDefinitionSystemControlList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a>

---

##### `Ulimit`<sup>Required</sup> <a name="Ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit"></a>

```go
func Ulimit() EcsDaemonTaskDefinitionContainerDefinitionUlimitList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput"></a>

```go
func DependsOnInput() interface{}
```

- *Type:* interface{}

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput"></a>

```go
func EntryPointInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentFileInput`<sup>Optional</sup> <a name="EnvironmentFileInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput"></a>

```go
func EnvironmentFileInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() interface{}
```

- *Type:* interface{}

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `FirelensConfigurationInput`<sup>Optional</sup> <a name="FirelensConfigurationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput"></a>

```go
func FirelensConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput"></a>

```go
func HealthCheckInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InteractiveInput`<sup>Optional</sup> <a name="InteractiveInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput"></a>

```go
func InteractiveInput() interface{}
```

- *Type:* interface{}

---

##### `LinuxParametersInput`<sup>Optional</sup> <a name="LinuxParametersInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput"></a>

```go
func LinuxParametersInput() interface{}
```

- *Type:* interface{}

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput"></a>

```go
func LogConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput"></a>

```go
func MemoryReservationInput() *f64
```

- *Type:* *f64

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput"></a>

```go
func MountPointInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivilegedInput`<sup>Optional</sup> <a name="PrivilegedInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput"></a>

```go
func PrivilegedInput() interface{}
```

- *Type:* interface{}

---

##### `PseudoTerminalInput`<sup>Optional</sup> <a name="PseudoTerminalInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput"></a>

```go
func PseudoTerminalInput() interface{}
```

- *Type:* interface{}

---

##### `ReadonlyRootFilesystemInput`<sup>Optional</sup> <a name="ReadonlyRootFilesystemInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput"></a>

```go
func ReadonlyRootFilesystemInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryCredentialsInput`<sup>Optional</sup> <a name="RepositoryCredentialsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput"></a>

```go
func RepositoryCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput"></a>

```go
func RestartPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `StartTimeoutInput`<sup>Optional</sup> <a name="StartTimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput"></a>

```go
func StartTimeoutInput() *f64
```

- *Type:* *f64

---

##### `StopTimeoutInput`<sup>Optional</sup> <a name="StopTimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput"></a>

```go
func StopTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SystemControlInput`<sup>Optional</sup> <a name="SystemControlInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput"></a>

```go
func SystemControlInput() interface{}
```

- *Type:* interface{}

---

##### `UlimitInput`<sup>Optional</sup> <a name="UlimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput"></a>

```go
func UlimitInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput"></a>

```go
func WorkingDirectoryInput() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint"></a>

```go
func EntryPoint() *[]*string
```

- *Type:* *[]*string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Interactive`<sup>Required</sup> <a name="Interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive"></a>

```go
func Interactive() interface{}
```

- *Type:* interface{}

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation"></a>

```go
func MemoryReservation() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Privileged`<sup>Required</sup> <a name="Privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged"></a>

```go
func Privileged() interface{}
```

- *Type:* interface{}

---

##### `PseudoTerminal`<sup>Required</sup> <a name="PseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal"></a>

```go
func PseudoTerminal() interface{}
```

- *Type:* interface{}

---

##### `ReadonlyRootFilesystem`<sup>Required</sup> <a name="ReadonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem"></a>

```go
func ReadonlyRootFilesystem() interface{}
```

- *Type:* interface{}

---

##### `StartTimeout`<sup>Required</sup> <a name="StartTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout"></a>

```go
func StartTimeout() *f64
```

- *Type:* *f64

---

##### `StopTimeout`<sup>Required</sup> <a name="StopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout"></a>

```go
func StopTimeout() *f64
```

- *Type:* *f64

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput">CredentialsParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialsParameterInput`<sup>Optional</sup> <a name="CredentialsParameterInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```go
func CredentialsParameterInput() *string
```

- *Type:* *string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```go
func CredentialsParameter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes">ResetIgnoredExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod">ResetRestartAttemptPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoredExitCodes` <a name="ResetIgnoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes"></a>

```go
func ResetIgnoredExitCodes()
```

##### `ResetRestartAttemptPeriod` <a name="ResetRestartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod"></a>

```go
func ResetRestartAttemptPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput">IgnoredExitCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput">RestartAttemptPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes">IgnoredExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod">RestartAttemptPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoredExitCodesInput`<sup>Optional</sup> <a name="IgnoredExitCodesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput"></a>

```go
func IgnoredExitCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `RestartAttemptPeriodInput`<sup>Optional</sup> <a name="RestartAttemptPeriodInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput"></a>

```go
func RestartAttemptPeriodInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IgnoredExitCodes`<sup>Required</sup> <a name="IgnoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```go
func IgnoredExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `RestartAttemptPeriod`<sup>Required</sup> <a name="RestartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```go
func RestartAttemptPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretList <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput"></a>

```go
func ValueFromInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlList <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionSystemControlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionSystemControlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitList <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionUlimitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionContainerDefinitionUlimitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput">HardLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput">SoftLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit">HardLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit">SoftLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HardLimitInput`<sup>Optional</sup> <a name="HardLimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput"></a>

```go
func HardLimitInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SoftLimitInput`<sup>Optional</sup> <a name="SoftLimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput"></a>

```go
func SoftLimitInput() *f64
```

- *Type:* *f64

---

##### `HardLimit`<sup>Required</sup> <a name="HardLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit"></a>

```go
func HardLimit() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SoftLimit`<sup>Required</sup> <a name="SoftLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit"></a>

```go
func SoftLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionVolumeHostList <a name="EcsDaemonTaskDefinitionVolumeHostList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionVolumeHostList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionVolumeHostList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionVolumeHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionVolumeHostOutputReference <a name="EcsDaemonTaskDefinitionVolumeHostOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionVolumeHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionVolumeHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath">ResetSourcePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourcePath` <a name="ResetSourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath"></a>

```go
func ResetSourcePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput">SourcePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath">SourcePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePathInput`<sup>Optional</sup> <a name="SourcePathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput"></a>

```go
func SourcePathInput() *string
```

- *Type:* *string

---

##### `SourcePath`<sup>Required</sup> <a name="SourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath"></a>

```go
func SourcePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionVolumeList <a name="EcsDaemonTaskDefinitionVolumeList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsDaemonTaskDefinitionVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get"></a>

```go
func Get(index *f64) EcsDaemonTaskDefinitionVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsDaemonTaskDefinitionVolumeOutputReference <a name="EcsDaemonTaskDefinitionVolumeOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ecsdaemontaskdefinition"

ecsdaemontaskdefinition.NewEcsDaemonTaskDefinitionVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsDaemonTaskDefinitionVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost">ResetHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHost` <a name="PutHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost"></a>

```go
func PutHost(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost"></a>

```go
func ResetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host">Host</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput">HostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host"></a>

```go
func Host() EcsDaemonTaskDefinitionVolumeHostList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput"></a>

```go
func HostInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



