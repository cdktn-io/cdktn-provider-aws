# `accountaccessEntitlement` Submodule <a name="`accountaccessEntitlement` Submodule" id="@cdktn/provider-aws.accountaccessEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountaccessEntitlement <a name="AccountaccessEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement aws_accountaccess_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlement(scope Construct, id *string, config AccountaccessEntitlementConfig) AccountaccessEntitlement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig">AccountaccessEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig">AccountaccessEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement">PutEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetEntitlement">ResetEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntitlement` <a name="PutEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement"></a>

```go
func PutEntitlement(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntitlement` <a name="ResetEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetEntitlement"></a>

```go
func ResetEntitlement()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.AccountaccessEntitlement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.AccountaccessEntitlement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.AccountaccessEntitlement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.AccountaccessEntitlement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccountaccessEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccountaccessEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AccountaccessEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement">Entitlement</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList">AccountaccessEntitlementEntitlementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput">ApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput">EntitlementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Entitlement`<sup>Required</sup> <a name="Entitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement"></a>

```go
func Entitlement() AccountaccessEntitlementEntitlementList
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList">AccountaccessEntitlementEntitlementList</a>

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput"></a>

```go
func ApplicationArnInput() *string
```

- *Type:* *string

---

##### `EntitlementInput`<sup>Optional</sup> <a name="EntitlementInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput"></a>

```go
func EntitlementInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountaccessEntitlementConfig <a name="AccountaccessEntitlementConfig" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

&accountaccessentitlement.AccountaccessEntitlementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationArn: *string,
	Entitlement: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement">Entitlement</a></code> | <code>interface{}</code> | entitlement block. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn"></a>

```go
ApplicationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}.

---

##### `Entitlement`<sup>Optional</sup> <a name="Entitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement"></a>

```go
Entitlement interface{}
```

- *Type:* interface{}

entitlement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#region AccountaccessEntitlement#region}

---

### AccountaccessEntitlementEntitlement <a name="AccountaccessEntitlementEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

&accountaccessentitlement.AccountaccessEntitlementEntitlement {
	PrincipalRole: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole">PrincipalRole</a></code> | <code>interface{}</code> | principal_role block. |

---

##### `PrincipalRole`<sup>Optional</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole"></a>

```go
PrincipalRole interface{}
```

- *Type:* interface{}

principal_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}

---

### AccountaccessEntitlementEntitlementPrincipalRole <a name="AccountaccessEntitlementEntitlementPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

&accountaccessentitlement.AccountaccessEntitlementEntitlementPrincipalRole {
	RoleArn: *string,
	Principal: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal">Principal</a></code> | <code>interface{}</code> | principal block. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal"></a>

```go
Principal interface{}
```

- *Type:* interface{}

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipal <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

&accountaccessentitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal {
	IdentityCenter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter">IdentityCenter</a></code> | <code>interface{}</code> | identity_center block. |

---

##### `IdentityCenter`<sup>Optional</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter"></a>

```go
IdentityCenter interface{}
```

- *Type:* interface{}

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

&accountaccessentitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter {
	GroupId: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountaccessEntitlementEntitlementList <a name="AccountaccessEntitlementEntitlementList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccountaccessEntitlementEntitlementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get"></a>

```go
func Get(index *f64) AccountaccessEntitlementEntitlementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountaccessEntitlementEntitlementOutputReference <a name="AccountaccessEntitlementEntitlementOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccountaccessEntitlementEntitlementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole">PutPrincipalRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resetPrincipalRole">ResetPrincipalRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalRole` <a name="PutPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole"></a>

```go
func PutPrincipalRole(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipalRole` <a name="ResetPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resetPrincipalRole"></a>

```go
func ResetPrincipalRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole">PrincipalRole</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList">AccountaccessEntitlementEntitlementPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput">PrincipalRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalRole`<sup>Required</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole"></a>

```go
func PrincipalRole() AccountaccessEntitlementEntitlementPrincipalRoleList
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList">AccountaccessEntitlementEntitlementPrincipalRoleList</a>

---

##### `PrincipalRoleInput`<sup>Optional</sup> <a name="PrincipalRoleInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput"></a>

```go
func PrincipalRoleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountaccessEntitlementEntitlementPrincipalRoleList <a name="AccountaccessEntitlementEntitlementPrincipalRoleList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementPrincipalRoleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccountaccessEntitlementEntitlementPrincipalRoleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get"></a>

```go
func Get(index *f64) AccountaccessEntitlementEntitlementPrincipalRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountaccessEntitlementEntitlementPrincipalRoleOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementPrincipalRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccountaccessEntitlementEntitlementPrincipalRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal"></a>

```go
func PutPrincipal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal"></a>

```go
func Principal() AccountaccessEntitlementEntitlementPrincipalRolePrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalList</a>

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get"></a>

```go
func Get(index *f64) AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalList <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementPrincipalRolePrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccountaccessEntitlementEntitlementPrincipalRolePrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get"></a>

```go
func Get(index *f64) AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/accountaccessentitlement"

accountaccessentitlement.NewAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter">PutIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resetIdentityCenter">ResetIdentityCenter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentityCenter` <a name="PutIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```go
func PutIdentityCenter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentityCenter` <a name="ResetIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resetIdentityCenter"></a>

```go
func ResetIdentityCenter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput">IdentityCenterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```go
func IdentityCenter() AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList</a>

---

##### `IdentityCenterInput`<sup>Optional</sup> <a name="IdentityCenterInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```go
func IdentityCenterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



