# `servicequotasAutoManagement` Submodule <a name="`servicequotasAutoManagement` Submodule" id="@cdktn/provider-aws.servicequotasAutoManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasAutoManagement <a name="ServicequotasAutoManagement" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management aws_servicequotas_auto_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/servicequotasautomanagement"

servicequotasautomanagement.NewServicequotasAutoManagement(scope Construct, id *string, config ServicequotasAutoManagementConfig) ServicequotasAutoManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig">ServicequotasAutoManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig">ServicequotasAutoManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetExclusionList">ResetExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetNotificationArn">ResetNotificationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetExclusionList` <a name="ResetExclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetExclusionList"></a>

```go
func ResetExclusionList()
```

##### `ResetNotificationArn` <a name="ResetNotificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetNotificationArn"></a>

```go
func ResetNotificationArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicequotasAutoManagement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/servicequotasautomanagement"

servicequotasautomanagement.ServicequotasAutoManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/servicequotasautomanagement"

servicequotasautomanagement.ServicequotasAutoManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/servicequotasautomanagement"

servicequotasautomanagement.ServicequotasAutoManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/servicequotasautomanagement"

servicequotasautomanagement.ServicequotasAutoManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServicequotasAutoManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicequotasAutoManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicequotasAutoManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServicequotasAutoManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionListInput">ExclusionListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArnInput">NotificationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevelInput">OptInLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInTypeInput">OptInTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionList">ExclusionList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArn">NotificationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevel">OptInLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInType">OptInType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ExclusionListInput`<sup>Optional</sup> <a name="ExclusionListInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionListInput"></a>

```go
func ExclusionListInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationArnInput`<sup>Optional</sup> <a name="NotificationArnInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArnInput"></a>

```go
func NotificationArnInput() *string
```

- *Type:* *string

---

##### `OptInLevelInput`<sup>Optional</sup> <a name="OptInLevelInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevelInput"></a>

```go
func OptInLevelInput() *string
```

- *Type:* *string

---

##### `OptInTypeInput`<sup>Optional</sup> <a name="OptInTypeInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInTypeInput"></a>

```go
func OptInTypeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ExclusionList`<sup>Required</sup> <a name="ExclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionList"></a>

```go
func ExclusionList() interface{}
```

- *Type:* interface{}

---

##### `NotificationArn`<sup>Required</sup> <a name="NotificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArn"></a>

```go
func NotificationArn() *string
```

- *Type:* *string

---

##### `OptInLevel`<sup>Required</sup> <a name="OptInLevel" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevel"></a>

```go
func OptInLevel() *string
```

- *Type:* *string

---

##### `OptInType`<sup>Required</sup> <a name="OptInType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInType"></a>

```go
func OptInType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasAutoManagementConfig <a name="ServicequotasAutoManagementConfig" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/servicequotasautomanagement"

&servicequotasautomanagement.ServicequotasAutoManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OptInLevel: *string,
	OptInType: *string,
	ExclusionList: interface{},
	NotificationArn: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInLevel">OptInLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#opt_in_level ServicequotasAutoManagement#opt_in_level}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInType">OptInType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#opt_in_type ServicequotasAutoManagement#opt_in_type}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.exclusionList">ExclusionList</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#exclusion_list ServicequotasAutoManagement#exclusion_list}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.notificationArn">NotificationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#notification_arn ServicequotasAutoManagement#notification_arn}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OptInLevel`<sup>Required</sup> <a name="OptInLevel" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInLevel"></a>

```go
OptInLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#opt_in_level ServicequotasAutoManagement#opt_in_level}.

---

##### `OptInType`<sup>Required</sup> <a name="OptInType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInType"></a>

```go
OptInType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#opt_in_type ServicequotasAutoManagement#opt_in_type}.

---

##### `ExclusionList`<sup>Optional</sup> <a name="ExclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.exclusionList"></a>

```go
ExclusionList interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#exclusion_list ServicequotasAutoManagement#exclusion_list}.

---

##### `NotificationArn`<sup>Optional</sup> <a name="NotificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.notificationArn"></a>

```go
NotificationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#notification_arn ServicequotasAutoManagement#notification_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/servicequotas_auto_management#region ServicequotasAutoManagement#region}

---



