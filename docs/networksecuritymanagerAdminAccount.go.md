# `networksecuritymanagerAdminAccount` Submodule <a name="`networksecuritymanagerAdminAccount` Submodule" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerAdminAccount <a name="NetworksecuritymanagerAdminAccount" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account aws_networksecuritymanager_admin_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccount(scope Construct, id *string, config NetworksecuritymanagerAdminAccountConfig) NetworksecuritymanagerAdminAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig">NetworksecuritymanagerAdminAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig">NetworksecuritymanagerAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope">PutAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope">ResetAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdminScope` <a name="PutAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope"></a>

```go
func PutAdminScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts"></a>

```go
func PutTimeouts(value NetworksecuritymanagerAdminAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `ResetAdminScope` <a name="ResetAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope"></a>

```go
func ResetAdminScope()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworksecuritymanagerAdminAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworksecuritymanagerAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope">AdminScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput">AdminScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope"></a>

```go
func AdminScope() NetworksecuritymanagerAdminAccountAdminScopeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts"></a>

```go
func Timeouts() NetworksecuritymanagerAdminAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AdminScopeInput`<sup>Optional</sup> <a name="AdminScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput"></a>

```go
func AdminScopeInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerAdminAccountAdminScope <a name="NetworksecuritymanagerAdminAccountAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

&networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccountAdminScope {
	FirewallTypeScope: interface{},
	ScopeFilter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope">FirewallTypeScope</a></code> | <code>interface{}</code> | firewall_type_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter">ScopeFilter</a></code> | <code>interface{}</code> | scope_filter block. |

---

##### `FirewallTypeScope`<sup>Optional</sup> <a name="FirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope"></a>

```go
FirewallTypeScope interface{}
```

- *Type:* interface{}

firewall_type_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_type_scope NetworksecuritymanagerAdminAccount#firewall_type_scope}

---

##### `ScopeFilter`<sup>Optional</sup> <a name="ScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter"></a>

```go
ScopeFilter interface{}
```

- *Type:* interface{}

scope_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#scope_filter NetworksecuritymanagerAdminAccount#scope_filter}

---

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

&networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope {
	AllFirewallTypesEnabled: interface{},
	FirewallTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled">AllFirewallTypesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes">FirewallTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}. |

---

##### `AllFirewallTypesEnabled`<sup>Optional</sup> <a name="AllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled"></a>

```go
AllFirewallTypesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}.

---

##### `FirewallTypes`<sup>Optional</sup> <a name="FirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes"></a>

```go
FirewallTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilter <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

&networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter {
	ExcludeOnly: interface{},
	IncludeAll: interface{},
	IncludeOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly">ExcludeOnly</a></code> | <code>interface{}</code> | exclude_only block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly">IncludeOnly</a></code> | <code>interface{}</code> | include_only block. |

---

##### `ExcludeOnly`<sup>Optional</sup> <a name="ExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly"></a>

```go
ExcludeOnly interface{}
```

- *Type:* interface{}

exclude_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#exclude_only NetworksecuritymanagerAdminAccount#exclude_only}

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll"></a>

```go
IncludeAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}.

---

##### `IncludeOnly`<sup>Optional</sup> <a name="IncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly"></a>

```go
IncludeOnly interface{}
```

- *Type:* interface{}

include_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_only NetworksecuritymanagerAdminAccount#include_only}

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

&networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly {
	Accounts: *[]*string,
	OrganizationalUnits: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts">Accounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts"></a>

```go
Accounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits"></a>

```go
OrganizationalUnits *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

&networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly {
	Accounts: *[]*string,
	OrganizationalUnits: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts">Accounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts"></a>

```go
Accounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits"></a>

```go
OrganizationalUnits *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountConfig <a name="NetworksecuritymanagerAdminAccountConfig" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

&networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Priority: *f64,
	AdminScope: interface{},
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v26.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope">AdminScope</a></code> | <code>interface{}</code> | admin_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}.

---

##### `AdminScope`<sup>Optional</sup> <a name="AdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope"></a>

```go
AdminScope interface{}
```

- *Type:* interface{}

admin_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts"></a>

```go
Timeouts NetworksecuritymanagerAdminAccountTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}

---

### NetworksecuritymanagerAdminAccountTimeouts <a name="NetworksecuritymanagerAdminAccountTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

&networksecuritymanageradminaccount.NetworksecuritymanagerAdminAccountTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#create NetworksecuritymanagerAdminAccount#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#delete NetworksecuritymanagerAdminAccount#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#update NetworksecuritymanagerAdminAccount#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled">ResetAllFirewallTypesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes">ResetFirewallTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllFirewallTypesEnabled` <a name="ResetAllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled"></a>

```go
func ResetAllFirewallTypesEnabled()
```

##### `ResetFirewallTypes` <a name="ResetFirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes"></a>

```go
func ResetFirewallTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput">AllFirewallTypesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput">FirewallTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled">AllFirewallTypesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes">FirewallTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllFirewallTypesEnabledInput`<sup>Optional</sup> <a name="AllFirewallTypesEnabledInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput"></a>

```go
func AllFirewallTypesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallTypesInput`<sup>Optional</sup> <a name="FirewallTypesInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput"></a>

```go
func FirewallTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllFirewallTypesEnabled`<sup>Required</sup> <a name="AllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled"></a>

```go
func AllFirewallTypesEnabled() interface{}
```

- *Type:* interface{}

---

##### `FirewallTypes`<sup>Required</sup> <a name="FirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes"></a>

```go
func FirewallTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerAdminAccountAdminScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerAdminAccountAdminScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerAdminAccountAdminScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope">PutFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter">PutScopeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope">ResetFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter">ResetScopeFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewallTypeScope` <a name="PutFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope"></a>

```go
func PutFirewallTypeScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScopeFilter` <a name="PutScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter"></a>

```go
func PutScopeFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFirewallTypeScope` <a name="ResetFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope"></a>

```go
func ResetFirewallTypeScope()
```

##### `ResetScopeFilter` <a name="ResetScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter"></a>

```go
func ResetScopeFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope">FirewallTypeScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter">ScopeFilter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput">FirewallTypeScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput">ScopeFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirewallTypeScope`<sup>Required</sup> <a name="FirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope"></a>

```go
func FirewallTypeScope() NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a>

---

##### `ScopeFilter`<sup>Required</sup> <a name="ScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter"></a>

```go
func ScopeFilter() NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a>

---

##### `FirewallTypeScopeInput`<sup>Optional</sup> <a name="FirewallTypeScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput"></a>

```go
func FirewallTypeScopeInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeFilterInput`<sup>Optional</sup> <a name="ScopeFilterInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput"></a>

```go
func ScopeFilterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts"></a>

```go
func ResetAccounts()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits"></a>

```go
func ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput">AccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts">Accounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput"></a>

```go
func AccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```go
func OrganizationalUnitsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts"></a>

```go
func Accounts() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits"></a>

```go
func OrganizationalUnits() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts"></a>

```go
func ResetAccounts()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits"></a>

```go
func ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput">AccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts">Accounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput"></a>

```go
func AccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```go
func OrganizationalUnitsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts"></a>

```go
func Accounts() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits"></a>

```go
func OrganizationalUnits() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeScopeFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly">PutExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly">PutIncludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly">ResetExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly">ResetIncludeOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludeOnly` <a name="PutExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly"></a>

```go
func PutExcludeOnly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncludeOnly` <a name="PutIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly"></a>

```go
func PutIncludeOnly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludeOnly` <a name="ResetExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly"></a>

```go
func ResetExcludeOnly()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll"></a>

```go
func ResetIncludeAll()
```

##### `ResetIncludeOnly` <a name="ResetIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly"></a>

```go
func ResetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly">ExcludeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly">IncludeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput">ExcludeOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput">IncludeOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeOnly`<sup>Required</sup> <a name="ExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly"></a>

```go
func ExcludeOnly() NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a>

---

##### `IncludeOnly`<sup>Required</sup> <a name="IncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly"></a>

```go
func IncludeOnly() NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a>

---

##### `ExcludeOnlyInput`<sup>Optional</sup> <a name="ExcludeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput"></a>

```go
func ExcludeOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput"></a>

```go
func IncludeAllInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeOnlyInput`<sup>Optional</sup> <a name="IncludeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput"></a>

```go
func IncludeOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll"></a>

```go
func IncludeAll() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerAdminAccountTimeoutsOutputReference <a name="NetworksecuritymanagerAdminAccountTimeoutsOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanageradminaccount"

networksecuritymanageradminaccount.NewNetworksecuritymanagerAdminAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworksecuritymanagerAdminAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



