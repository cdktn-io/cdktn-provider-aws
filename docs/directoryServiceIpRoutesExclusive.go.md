# `directoryServiceIpRoutesExclusive` Submodule <a name="`directoryServiceIpRoutesExclusive` Submodule" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceIpRoutesExclusive <a name="DirectoryServiceIpRoutesExclusive" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive aws_directory_service_ip_routes_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.NewDirectoryServiceIpRoutesExclusive(scope Construct, id *string, config DirectoryServiceIpRoutesExclusiveConfig) DirectoryServiceIpRoutesExclusive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig">DirectoryServiceIpRoutesExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig">DirectoryServiceIpRoutesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute">PutIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute">ResetIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers">ResetUpdateSecurityGroupForDirectoryControllers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpRoute` <a name="PutIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute"></a>

```go
func PutIpRoute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts"></a>

```go
func PutTimeouts(value DirectoryServiceIpRoutesExclusiveTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `ResetIpRoute` <a name="ResetIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute"></a>

```go
func ResetIpRoute()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateSecurityGroupForDirectoryControllers` <a name="ResetUpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers"></a>

```go
func ResetUpdateSecurityGroupForDirectoryControllers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.DirectoryServiceIpRoutesExclusive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.DirectoryServiceIpRoutesExclusive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.DirectoryServiceIpRoutesExclusive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.DirectoryServiceIpRoutesExclusive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectoryServiceIpRoutesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectoryServiceIpRoutesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceIpRoutesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute">IpRoute</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput">IpRouteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput">UpdateSecurityGroupForDirectoryControllersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers">UpdateSecurityGroupForDirectoryControllers</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpRoute`<sup>Required</sup> <a name="IpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute"></a>

```go
func IpRoute() DirectoryServiceIpRoutesExclusiveIpRouteList
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts"></a>

```go
func Timeouts() DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a>

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `IpRouteInput`<sup>Optional</sup> <a name="IpRouteInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput"></a>

```go
func IpRouteInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateSecurityGroupForDirectoryControllersInput`<sup>Optional</sup> <a name="UpdateSecurityGroupForDirectoryControllersInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput"></a>

```go
func UpdateSecurityGroupForDirectoryControllersInput() interface{}
```

- *Type:* interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UpdateSecurityGroupForDirectoryControllers`<sup>Required</sup> <a name="UpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers"></a>

```go
func UpdateSecurityGroupForDirectoryControllers() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceIpRoutesExclusiveConfig <a name="DirectoryServiceIpRoutesExclusiveConfig" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

&directoryserviceiproutesexclusive.DirectoryServiceIpRoutesExclusiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryId: *string,
	IpRoute: interface{},
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts,
	UpdateSecurityGroupForDirectoryControllers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute">IpRoute</a></code> | <code>interface{}</code> | ip_route block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers">UpdateSecurityGroupForDirectoryControllers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}.

---

##### `IpRoute`<sup>Optional</sup> <a name="IpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute"></a>

```go
IpRoute interface{}
```

- *Type:* interface{}

ip_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts"></a>

```go
Timeouts DirectoryServiceIpRoutesExclusiveTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}

---

##### `UpdateSecurityGroupForDirectoryControllers`<sup>Optional</sup> <a name="UpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers"></a>

```go
UpdateSecurityGroupForDirectoryControllers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}.

---

### DirectoryServiceIpRoutesExclusiveIpRoute <a name="DirectoryServiceIpRoutesExclusiveIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

&directoryserviceiproutesexclusive.DirectoryServiceIpRoutesExclusiveIpRoute {
	CidrIp: *string,
	CidrIpv6: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp">CidrIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}. |

---

##### `CidrIp`<sup>Optional</sup> <a name="CidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp"></a>

```go
CidrIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}.

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6"></a>

```go
CidrIpv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}.

---

### DirectoryServiceIpRoutesExclusiveTimeouts <a name="DirectoryServiceIpRoutesExclusiveTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

&directoryserviceiproutesexclusive.DirectoryServiceIpRoutesExclusiveTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#create DirectoryServiceIpRoutesExclusive#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update DirectoryServiceIpRoutesExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceIpRoutesExclusiveIpRouteList <a name="DirectoryServiceIpRoutesExclusiveIpRouteList" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.NewDirectoryServiceIpRoutesExclusiveIpRouteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectoryServiceIpRoutesExclusiveIpRouteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get"></a>

```go
func Get(index *f64) DirectoryServiceIpRoutesExclusiveIpRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectoryServiceIpRoutesExclusiveIpRouteOutputReference <a name="DirectoryServiceIpRoutesExclusiveIpRouteOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.NewDirectoryServiceIpRoutesExclusiveIpRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectoryServiceIpRoutesExclusiveIpRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp">ResetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrIp` <a name="ResetCidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp"></a>

```go
func ResetCidrIp()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6"></a>

```go
func ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput">CidrIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp">CidrIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrIpInput`<sup>Optional</sup> <a name="CidrIpInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput"></a>

```go
func CidrIpInput() *string
```

- *Type:* *string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input"></a>

```go
func CidrIpv6Input() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp"></a>

```go
func CidrIp() *string
```

- *Type:* *string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6"></a>

```go
func CidrIpv6() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference <a name="DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/directoryserviceiproutesexclusive"

directoryserviceiproutesexclusive.NewDirectoryServiceIpRoutesExclusiveTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



