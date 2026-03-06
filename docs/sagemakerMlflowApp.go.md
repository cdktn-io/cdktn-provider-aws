# `sagemakerMlflowApp` Submodule <a name="`sagemakerMlflowApp` Submodule" id="@cdktn/provider-aws.sagemakerMlflowApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowApp <a name="SagemakerMlflowApp" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app aws_sagemaker_mlflow_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

sagemakermlflowapp.NewSagemakerMlflowApp(scope Construct, id *string, config SagemakerMlflowAppConfig) SagemakerMlflowApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig">SagemakerMlflowAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig">SagemakerMlflowAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetAccountDefaultStatus">ResetAccountDefaultStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetDefaultDomainIdList">ResetDefaultDomainIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode">ResetModelRegistrationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart">ResetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts"></a>

```go
func PutTimeouts(value SagemakerMlflowAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

---

##### `ResetAccountDefaultStatus` <a name="ResetAccountDefaultStatus" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetAccountDefaultStatus"></a>

```go
func ResetAccountDefaultStatus()
```

##### `ResetDefaultDomainIdList` <a name="ResetDefaultDomainIdList" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetDefaultDomainIdList"></a>

```go
func ResetDefaultDomainIdList()
```

##### `ResetModelRegistrationMode` <a name="ResetModelRegistrationMode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode"></a>

```go
func ResetModelRegistrationMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeeklyMaintenanceWindowStart` <a name="ResetWeeklyMaintenanceWindowStart" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart"></a>

```go
func ResetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

sagemakermlflowapp.SagemakerMlflowApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

sagemakermlflowapp.SagemakerMlflowApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

sagemakermlflowapp.SagemakerMlflowApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

sagemakermlflowapp.SagemakerMlflowApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerMlflowApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerMlflowApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference">SagemakerMlflowAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatusInput">AccountDefaultStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput">ArtifactStoreUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdListInput">DefaultDomainIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput">ModelRegistrationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput">WeeklyMaintenanceWindowStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatus">AccountDefaultStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdList">DefaultDomainIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode">ModelRegistrationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeouts"></a>

```go
func Timeouts() SagemakerMlflowAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference">SagemakerMlflowAppTimeoutsOutputReference</a>

---

##### `AccountDefaultStatusInput`<sup>Optional</sup> <a name="AccountDefaultStatusInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatusInput"></a>

```go
func AccountDefaultStatusInput() *string
```

- *Type:* *string

---

##### `ArtifactStoreUriInput`<sup>Optional</sup> <a name="ArtifactStoreUriInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput"></a>

```go
func ArtifactStoreUriInput() *string
```

- *Type:* *string

---

##### `DefaultDomainIdListInput`<sup>Optional</sup> <a name="DefaultDomainIdListInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdListInput"></a>

```go
func DefaultDomainIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `ModelRegistrationModeInput`<sup>Optional</sup> <a name="ModelRegistrationModeInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput"></a>

```go
func ModelRegistrationModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStartInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput"></a>

```go
func WeeklyMaintenanceWindowStartInput() *string
```

- *Type:* *string

---

##### `AccountDefaultStatus`<sup>Required</sup> <a name="AccountDefaultStatus" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatus"></a>

```go
func AccountDefaultStatus() *string
```

- *Type:* *string

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri"></a>

```go
func ArtifactStoreUri() *string
```

- *Type:* *string

---

##### `DefaultDomainIdList`<sup>Required</sup> <a name="DefaultDomainIdList" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdList"></a>

```go
func DefaultDomainIdList() *[]*string
```

- *Type:* *[]*string

---

##### `ModelRegistrationMode`<sup>Required</sup> <a name="ModelRegistrationMode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode"></a>

```go
func ModelRegistrationMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart"></a>

```go
func WeeklyMaintenanceWindowStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowAppConfig <a name="SagemakerMlflowAppConfig" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

&sagemakermlflowapp.SagemakerMlflowAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactStoreUri: *string,
	Name: *string,
	RoleArn: *string,
	AccountDefaultStatus: *string,
	DefaultDomainIdList: *[]*string,
	ModelRegistrationMode: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v23.sagemakerMlflowApp.SagemakerMlflowAppTimeouts,
	WeeklyMaintenanceWindowStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.accountDefaultStatus">AccountDefaultStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.defaultDomainIdList">DefaultDomainIdList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode">ModelRegistrationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri"></a>

```go
ArtifactStoreUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}.

---

##### `AccountDefaultStatus`<sup>Optional</sup> <a name="AccountDefaultStatus" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.accountDefaultStatus"></a>

```go
AccountDefaultStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}.

---

##### `DefaultDomainIdList`<sup>Optional</sup> <a name="DefaultDomainIdList" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.defaultDomainIdList"></a>

```go
DefaultDomainIdList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}.

---

##### `ModelRegistrationMode`<sup>Optional</sup> <a name="ModelRegistrationMode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode"></a>

```go
ModelRegistrationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#region SagemakerMlflowApp#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.timeouts"></a>

```go
Timeouts SagemakerMlflowAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#timeouts SagemakerMlflowApp#timeouts}

---

##### `WeeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart"></a>

```go
WeeklyMaintenanceWindowStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}.

---

### SagemakerMlflowAppTimeouts <a name="SagemakerMlflowAppTimeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

&sagemakermlflowapp.SagemakerMlflowAppTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#create SagemakerMlflowApp#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#delete SagemakerMlflowApp#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.1/docs/resources/sagemaker_mlflow_app#update SagemakerMlflowApp#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowAppTimeoutsOutputReference <a name="SagemakerMlflowAppTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/sagemakermlflowapp"

sagemakermlflowapp.NewSagemakerMlflowAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerMlflowAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



