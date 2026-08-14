# `resiliencehubv2Service` Submodule <a name="`resiliencehubv2Service` Submodule" id="@cdktn/provider-aws.resiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Service <a name="Resiliencehubv2Service" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service aws_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.NewResiliencehubv2Service(scope Construct, id *string, config Resiliencehubv2ServiceConfig) Resiliencehubv2Service
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel">PutPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery">ResetDependencyDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel">ResetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermissionModel` <a name="PutPermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel"></a>

```go
func PutPermissionModel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDependencyDiscovery` <a name="ResetDependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery"></a>

```go
func ResetDependencyDiscovery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPermissionModel` <a name="ResetPermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel"></a>

```go
func ResetPermissionModel()
```

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn"></a>

```go
func ResetPolicyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.Resiliencehubv2Service_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.Resiliencehubv2Service_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.Resiliencehubv2Service_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.Resiliencehubv2Service_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Resiliencehubv2Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Resiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList">Resiliencehubv2ServicePermissionModelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput">DependencyDiscoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput">PermissionModelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput">PolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery">DependencyDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel"></a>

```go
func PermissionModel() Resiliencehubv2ServicePermissionModelList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList">Resiliencehubv2ServicePermissionModelList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DependencyDiscoveryInput`<sup>Optional</sup> <a name="DependencyDiscoveryInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput"></a>

```go
func DependencyDiscoveryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput"></a>

```go
func PermissionModelInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput"></a>

```go
func PolicyArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DependencyDiscovery`<sup>Required</sup> <a name="DependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery"></a>

```go
func DependencyDiscovery() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceConfig <a name="Resiliencehubv2ServiceConfig" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

&resiliencehubv2service.Resiliencehubv2ServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Regions: *[]*string,
	DependencyDiscovery: *string,
	Description: *string,
	KmsKeyId: *string,
	PermissionModel: interface{},
	PolicyArn: *string,
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery">DependencyDiscovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel">PermissionModel</a></code> | <code>interface{}</code> | permission_model block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn">PolicyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}.

---

##### `DependencyDiscovery`<sup>Optional</sup> <a name="DependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery"></a>

```go
DependencyDiscovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}.

---

##### `PermissionModel`<sup>Optional</sup> <a name="PermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel"></a>

```go
PermissionModel interface{}
```

- *Type:* interface{}

permission_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn"></a>

```go
PolicyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#region Resiliencehubv2Service#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}.

---

### Resiliencehubv2ServicePermissionModel <a name="Resiliencehubv2ServicePermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

&resiliencehubv2service.Resiliencehubv2ServicePermissionModel {
	InvokerRoleName: *string,
	CrossAccountRole: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName">InvokerRoleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRole">CrossAccountRole</a></code> | <code>interface{}</code> | cross_account_role block. |

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName"></a>

```go
InvokerRoleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}.

---

##### `CrossAccountRole`<sup>Optional</sup> <a name="CrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRole"></a>

```go
CrossAccountRole interface{}
```

- *Type:* interface{}

cross_account_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#cross_account_role Resiliencehubv2Service#cross_account_role}

---

### Resiliencehubv2ServicePermissionModelCrossAccountRole <a name="Resiliencehubv2ServicePermissionModelCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

&resiliencehubv2service.Resiliencehubv2ServicePermissionModelCrossAccountRole {
	CrossAccountRoleArn: *string,
	ExternalId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.crossAccountRoleArn">CrossAccountRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}. |

---

##### `CrossAccountRoleArn`<sup>Required</sup> <a name="CrossAccountRoleArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.crossAccountRoleArn"></a>

```go
CrossAccountRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2ServicePermissionModelCrossAccountRoleList <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.NewResiliencehubv2ServicePermissionModelCrossAccountRoleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resiliencehubv2ServicePermissionModelCrossAccountRoleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get"></a>

```go
func Get(index *f64) Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.NewResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArnInput">CrossAccountRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn">CrossAccountRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRoleArnInput`<sup>Optional</sup> <a name="CrossAccountRoleArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArnInput"></a>

```go
func CrossAccountRoleArnInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `CrossAccountRoleArn`<sup>Required</sup> <a name="CrossAccountRoleArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn"></a>

```go
func CrossAccountRoleArn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2ServicePermissionModelList <a name="Resiliencehubv2ServicePermissionModelList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.NewResiliencehubv2ServicePermissionModelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resiliencehubv2ServicePermissionModelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get"></a>

```go
func Get(index *f64) Resiliencehubv2ServicePermissionModelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2ServicePermissionModelOutputReference <a name="Resiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2service"

resiliencehubv2service.NewResiliencehubv2ServicePermissionModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resiliencehubv2ServicePermissionModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole">PutCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRole">ResetCrossAccountRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRole` <a name="PutCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole"></a>

```go
func PutCrossAccountRole(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCrossAccountRole` <a name="ResetCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRole"></a>

```go
func ResetCrossAccountRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList">Resiliencehubv2ServicePermissionModelCrossAccountRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleInput">CrossAccountRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput">InvokerRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">InvokerRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole"></a>

```go
func CrossAccountRole() Resiliencehubv2ServicePermissionModelCrossAccountRoleList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList">Resiliencehubv2ServicePermissionModelCrossAccountRoleList</a>

---

##### `CrossAccountRoleInput`<sup>Optional</sup> <a name="CrossAccountRoleInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleInput"></a>

```go
func CrossAccountRoleInput() interface{}
```

- *Type:* interface{}

---

##### `InvokerRoleNameInput`<sup>Optional</sup> <a name="InvokerRoleNameInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput"></a>

```go
func InvokerRoleNameInput() *string
```

- *Type:* *string

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```go
func InvokerRoleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



