# `notificationsOrganizationalUnitAssociation` Submodule <a name="`notificationsOrganizationalUnitAssociation` Submodule" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsOrganizationalUnitAssociation <a name="NotificationsOrganizationalUnitAssociation" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association aws_notifications_organizational_unit_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/notificationsorganizationalunitassociation"

notificationsorganizationalunitassociation.NewNotificationsOrganizationalUnitAssociation(scope Construct, id *string, config NotificationsOrganizationalUnitAssociationConfig) NotificationsOrganizationalUnitAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig">NotificationsOrganizationalUnitAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig">NotificationsOrganizationalUnitAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationsOrganizationalUnitAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/notificationsorganizationalunitassociation"

notificationsorganizationalunitassociation.NotificationsOrganizationalUnitAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/notificationsorganizationalunitassociation"

notificationsorganizationalunitassociation.NotificationsOrganizationalUnitAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/notificationsorganizationalunitassociation"

notificationsorganizationalunitassociation.NotificationsOrganizationalUnitAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/notificationsorganizationalunitassociation"

notificationsorganizationalunitassociation.NotificationsOrganizationalUnitAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NotificationsOrganizationalUnitAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationsOrganizationalUnitAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationsOrganizationalUnitAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsOrganizationalUnitAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArnInput">NotificationConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitIdInput">OrganizationalUnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArn">NotificationConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitId">OrganizationalUnitId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationConfigurationArnInput`<sup>Optional</sup> <a name="NotificationConfigurationArnInput" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArnInput"></a>

```go
func NotificationConfigurationArnInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitIdInput`<sup>Optional</sup> <a name="OrganizationalUnitIdInput" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitIdInput"></a>

```go
func OrganizationalUnitIdInput() *string
```

- *Type:* *string

---

##### `NotificationConfigurationArn`<sup>Required</sup> <a name="NotificationConfigurationArn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.notificationConfigurationArn"></a>

```go
func NotificationConfigurationArn() *string
```

- *Type:* *string

---

##### `OrganizationalUnitId`<sup>Required</sup> <a name="OrganizationalUnitId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.organizationalUnitId"></a>

```go
func OrganizationalUnitId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsOrganizationalUnitAssociationConfig <a name="NotificationsOrganizationalUnitAssociationConfig" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/notificationsorganizationalunitassociation"

&notificationsorganizationalunitassociation.NotificationsOrganizationalUnitAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NotificationConfigurationArn: *string,
	OrganizationalUnitId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.notificationConfigurationArn">NotificationConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn NotificationsOrganizationalUnitAssociation#notification_configuration_arn}. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.organizationalUnitId">OrganizationalUnitId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id NotificationsOrganizationalUnitAssociation#organizational_unit_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationConfigurationArn`<sup>Required</sup> <a name="NotificationConfigurationArn" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.notificationConfigurationArn"></a>

```go
NotificationConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn NotificationsOrganizationalUnitAssociation#notification_configuration_arn}.

---

##### `OrganizationalUnitId`<sup>Required</sup> <a name="OrganizationalUnitId" id="@cdktn/provider-aws.notificationsOrganizationalUnitAssociation.NotificationsOrganizationalUnitAssociationConfig.property.organizationalUnitId"></a>

```go
OrganizationalUnitId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id NotificationsOrganizationalUnitAssociation#organizational_unit_id}.

---



