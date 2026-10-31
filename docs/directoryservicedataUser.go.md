# `directoryservicedataUser` Submodule <a name="`directoryservicedataUser` Submodule" id="@cdktn/provider-aws.directoryservicedataUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryservicedataUser <a name="DirectoryservicedataUser" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user aws_directoryservicedata_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedatauser"

directoryservicedatauser.NewDirectoryservicedataUser(scope Construct, id *string, config DirectoryservicedataUserConfig) DirectoryservicedataUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig">DirectoryservicedataUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig">DirectoryservicedataUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetSurname">ResetSurname</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetGivenName"></a>

```go
func ResetGivenName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetSurname"></a>

```go
func ResetSurname()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryservicedataUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedatauser"

directoryservicedatauser.DirectoryservicedataUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedatauser"

directoryservicedatauser.DirectoryservicedataUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedatauser"

directoryservicedatauser.DirectoryservicedataUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedatauser"

directoryservicedatauser.DirectoryservicedataUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectoryservicedataUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectoryservicedataUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectoryservicedataUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryservicedataUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.distinguishedName">DistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.realm">Realm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.userPrincipalName">UserPrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenNameInput">GivenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountNameInput">SamAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surnameInput">SurnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountName">SamAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistinguishedName`<sup>Required</sup> <a name="DistinguishedName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.distinguishedName"></a>

```go
func DistinguishedName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.realm"></a>

```go
func Realm() *string
```

- *Type:* *string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `UserPrincipalName`<sup>Required</sup> <a name="UserPrincipalName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.userPrincipalName"></a>

```go
func UserPrincipalName() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenNameInput"></a>

```go
func GivenNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SamAccountNameInput`<sup>Optional</sup> <a name="SamAccountNameInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountNameInput"></a>

```go
func SamAccountNameInput() *string
```

- *Type:* *string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surnameInput"></a>

```go
func SurnameInput() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountName"></a>

```go
func SamAccountName() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryservicedataUserConfig <a name="DirectoryservicedataUserConfig" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedatauser"

&directoryservicedatauser.DirectoryservicedataUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryId: *string,
	SamAccountName: *string,
	EmailAddress: *string,
	GivenName: *string,
	Region: *string,
	Surname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.samAccountName">SamAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.givenName">GivenName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.surname">Surname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}.

---

##### `SamAccountName`<sup>Required</sup> <a name="SamAccountName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.samAccountName"></a>

```go
SamAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}.

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.givenName"></a>

```go
GivenName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#region DirectoryservicedataUser#region}

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.surname"></a>

```go
Surname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}.

---



