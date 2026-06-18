# `redshiftNamespaceRegistration` Submodule <a name="`redshiftNamespaceRegistration` Submodule" id="@cdktn/provider-aws.redshiftNamespaceRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftNamespaceRegistration <a name="RedshiftNamespaceRegistration" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration aws_redshift_namespace_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/redshiftnamespaceregistration"

redshiftnamespaceregistration.NewRedshiftNamespaceRegistration(scope Construct, id *string, config RedshiftNamespaceRegistrationConfig) RedshiftNamespaceRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig">RedshiftNamespaceRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig">RedshiftNamespaceRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier">ResetProvisionedClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier">ResetServerlessNamespaceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier">ResetServerlessWorkgroupIdentifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProvisionedClusterIdentifier` <a name="ResetProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier"></a>

```go
func ResetProvisionedClusterIdentifier()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServerlessNamespaceIdentifier` <a name="ResetServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier"></a>

```go
func ResetServerlessNamespaceIdentifier()
```

##### `ResetServerlessWorkgroupIdentifier` <a name="ResetServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier"></a>

```go
func ResetServerlessWorkgroupIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/redshiftnamespaceregistration"

redshiftnamespaceregistration.RedshiftNamespaceRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/redshiftnamespaceregistration"

redshiftnamespaceregistration.RedshiftNamespaceRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/redshiftnamespaceregistration"

redshiftnamespaceregistration.RedshiftNamespaceRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/redshiftnamespaceregistration"

redshiftnamespaceregistration.RedshiftNamespaceRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftNamespaceRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftNamespaceRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftNamespaceRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput">ConsumerIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput">NamespaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput">ProvisionedClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput">ServerlessNamespaceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput">ServerlessWorkgroupIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier">ConsumerIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType">NamespaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier">ProvisionedClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier">ServerlessNamespaceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier">ServerlessWorkgroupIdentifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsumerIdentifierInput`<sup>Optional</sup> <a name="ConsumerIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput"></a>

```go
func ConsumerIdentifierInput() *string
```

- *Type:* *string

---

##### `NamespaceTypeInput`<sup>Optional</sup> <a name="NamespaceTypeInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput"></a>

```go
func NamespaceTypeInput() *string
```

- *Type:* *string

---

##### `ProvisionedClusterIdentifierInput`<sup>Optional</sup> <a name="ProvisionedClusterIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput"></a>

```go
func ProvisionedClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServerlessNamespaceIdentifierInput`<sup>Optional</sup> <a name="ServerlessNamespaceIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput"></a>

```go
func ServerlessNamespaceIdentifierInput() *string
```

- *Type:* *string

---

##### `ServerlessWorkgroupIdentifierInput`<sup>Optional</sup> <a name="ServerlessWorkgroupIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput"></a>

```go
func ServerlessWorkgroupIdentifierInput() *string
```

- *Type:* *string

---

##### `ConsumerIdentifier`<sup>Required</sup> <a name="ConsumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier"></a>

```go
func ConsumerIdentifier() *string
```

- *Type:* *string

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType"></a>

```go
func NamespaceType() *string
```

- *Type:* *string

---

##### `ProvisionedClusterIdentifier`<sup>Required</sup> <a name="ProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier"></a>

```go
func ProvisionedClusterIdentifier() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServerlessNamespaceIdentifier`<sup>Required</sup> <a name="ServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier"></a>

```go
func ServerlessNamespaceIdentifier() *string
```

- *Type:* *string

---

##### `ServerlessWorkgroupIdentifier`<sup>Required</sup> <a name="ServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier"></a>

```go
func ServerlessWorkgroupIdentifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftNamespaceRegistrationConfig <a name="RedshiftNamespaceRegistrationConfig" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/redshiftnamespaceregistration"

&redshiftnamespaceregistration.RedshiftNamespaceRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConsumerIdentifier: *string,
	NamespaceType: *string,
	ProvisionedClusterIdentifier: *string,
	Region: *string,
	ServerlessNamespaceIdentifier: *string,
	ServerlessWorkgroupIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier">ConsumerIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType">NamespaceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier">ProvisionedClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier">ServerlessNamespaceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier">ServerlessWorkgroupIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsumerIdentifier`<sup>Required</sup> <a name="ConsumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier"></a>

```go
ConsumerIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}.

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType"></a>

```go
NamespaceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}.

---

##### `ProvisionedClusterIdentifier`<sup>Optional</sup> <a name="ProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier"></a>

```go
ProvisionedClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}

---

##### `ServerlessNamespaceIdentifier`<sup>Optional</sup> <a name="ServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier"></a>

```go
ServerlessNamespaceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}.

---

##### `ServerlessWorkgroupIdentifier`<sup>Optional</sup> <a name="ServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier"></a>

```go
ServerlessWorkgroupIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}.

---



