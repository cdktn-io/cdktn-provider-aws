# `redshiftIdcApplication` Submodule <a name="`redshiftIdcApplication` Submodule" id="@cdktn/provider-aws.redshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftIdcApplication <a name="RedshiftIdcApplication" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application aws_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplication(scope Construct, id *string, config RedshiftIdcApplicationConfig) RedshiftIdcApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig">RedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig">RedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer">PutAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration">PutServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer">ResetAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace">ResetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration">ResetServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizedTokenIssuer` <a name="PutAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer"></a>

```go
func PutAuthorizedTokenIssuer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceIntegration` <a name="PutServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration"></a>

```go
func PutServiceIntegration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationType` <a name="ResetApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType"></a>

```go
func ResetApplicationType()
```

##### `ResetAuthorizedTokenIssuer` <a name="ResetAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer"></a>

```go
func ResetAuthorizedTokenIssuer()
```

##### `ResetIdentityNamespace` <a name="ResetIdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace"></a>

```go
func ResetIdentityNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceIntegration` <a name="ResetServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration"></a>

```go
func ResetServiceIntegration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftIdcApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.RedshiftIdcApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.RedshiftIdcApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.RedshiftIdcApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.RedshiftIdcApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RedshiftIdcApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftIdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer">AuthorizedTokenIssuer</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration">ServiceIntegration</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput">AuthorizedTokenIssuerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput">IdcDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput">IdentityNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput">RedshiftIdcApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput">ServiceIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName">IdcDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace">IdentityNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedTokenIssuer`<sup>Required</sup> <a name="AuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer"></a>

```go
func AuthorizedTokenIssuer() RedshiftIdcApplicationAuthorizedTokenIssuerList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a>

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```go
func IdcManagedApplicationArn() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```go
func RedshiftIdcApplicationArn() *string
```

- *Type:* *string

---

##### `ServiceIntegration`<sup>Required</sup> <a name="ServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration"></a>

```go
func ServiceIntegration() RedshiftIdcApplicationServiceIntegrationList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput"></a>

```go
func ApplicationTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizedTokenIssuerInput`<sup>Optional</sup> <a name="AuthorizedTokenIssuerInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput"></a>

```go
func AuthorizedTokenIssuerInput() interface{}
```

- *Type:* interface{}

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `IdcDisplayNameInput`<sup>Optional</sup> <a name="IdcDisplayNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput"></a>

```go
func IdcDisplayNameInput() *string
```

- *Type:* *string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput"></a>

```go
func IdcInstanceArnInput() *string
```

- *Type:* *string

---

##### `IdentityNamespaceInput`<sup>Optional</sup> <a name="IdentityNamespaceInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput"></a>

```go
func IdentityNamespaceInput() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="RedshiftIdcApplicationNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```go
func RedshiftIdcApplicationNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceIntegrationInput`<sup>Optional</sup> <a name="ServiceIntegrationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput"></a>

```go
func ServiceIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName"></a>

```go
func IdcDisplayName() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `IdentityNamespace`<sup>Required</sup> <a name="IdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace"></a>

```go
func IdentityNamespace() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```go
func RedshiftIdcApplicationName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuer <a name="RedshiftIdcApplicationAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationAuthorizedTokenIssuer {
	AuthorizedAudiencesList: *[]*string,
	TrustedTokenIssuerArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}. |

---

##### `AuthorizedAudiencesList`<sup>Optional</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList"></a>

```go
AuthorizedAudiencesList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}.

---

##### `TrustedTokenIssuerArn`<sup>Optional</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn"></a>

```go
TrustedTokenIssuerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}.

---

### RedshiftIdcApplicationConfig <a name="RedshiftIdcApplicationConfig" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IamRoleArn: *string,
	IdcDisplayName: *string,
	IdcInstanceArn: *string,
	RedshiftIdcApplicationName: *string,
	ApplicationType: *string,
	AuthorizedTokenIssuer: interface{},
	IdentityNamespace: *string,
	Region: *string,
	ServiceIntegration: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName">IdcDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer">AuthorizedTokenIssuer</a></code> | <code>interface{}</code> | authorized_token_issuer block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace">IdentityNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration">ServiceIntegration</a></code> | <code>interface{}</code> | service_integration block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}.

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```go
IdcDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}.

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```go
IdcInstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}.

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```go
RedshiftIdcApplicationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}.

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType"></a>

```go
ApplicationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}.

---

##### `AuthorizedTokenIssuer`<sup>Optional</sup> <a name="AuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer"></a>

```go
AuthorizedTokenIssuer interface{}
```

- *Type:* interface{}

authorized_token_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}

---

##### `IdentityNamespace`<sup>Optional</sup> <a name="IdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace"></a>

```go
IdentityNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}

---

##### `ServiceIntegration`<sup>Optional</sup> <a name="ServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration"></a>

```go
ServiceIntegration interface{}
```

- *Type:* interface{}

service_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}.

---

### RedshiftIdcApplicationServiceIntegration <a name="RedshiftIdcApplicationServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationServiceIntegration {
	LakeFormation: interface{},
	Redshift: interface{},
	S3AccessGrants: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation">LakeFormation</a></code> | <code>interface{}</code> | lake_formation block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift">Redshift</a></code> | <code>interface{}</code> | redshift block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants">S3AccessGrants</a></code> | <code>interface{}</code> | s3_access_grants block. |

---

##### `LakeFormation`<sup>Optional</sup> <a name="LakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation"></a>

```go
LakeFormation interface{}
```

- *Type:* interface{}

lake_formation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation RedshiftIdcApplication#lake_formation}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift"></a>

```go
Redshift interface{}
```

- *Type:* interface{}

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift RedshiftIdcApplication#redshift}

---

##### `S3AccessGrants`<sup>Optional</sup> <a name="S3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants"></a>

```go
S3AccessGrants interface{}
```

- *Type:* interface{}

s3_access_grants block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#s3_access_grants RedshiftIdcApplication#s3_access_grants}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormation <a name="RedshiftIdcApplicationServiceIntegrationLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationServiceIntegrationLakeFormation {
	LakeFormationQuery: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code>interface{}</code> | lake_formation_query block. |

---

##### `LakeFormationQuery`<sup>Optional</sup> <a name="LakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery"></a>

```go
LakeFormationQuery interface{}
```

- *Type:* interface{}

lake_formation_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation_query RedshiftIdcApplication#lake_formation_query}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery {
	Authorization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationRedshift <a name="RedshiftIdcApplicationServiceIntegrationRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationServiceIntegrationRedshift {
	Connect: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect">Connect</a></code> | <code>interface{}</code> | connect block. |

---

##### `Connect`<sup>Optional</sup> <a name="Connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect"></a>

```go
Connect interface{}
```

- *Type:* interface{}

connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#connect RedshiftIdcApplication#connect}

---

### RedshiftIdcApplicationServiceIntegrationRedshiftConnect <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect {
	Authorization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrants <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants {
	ReadWriteAccess: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess">ReadWriteAccess</a></code> | <code>interface{}</code> | read_write_access block. |

---

##### `ReadWriteAccess`<sup>Optional</sup> <a name="ReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess"></a>

```go
ReadWriteAccess interface{}
```

- *Type:* interface{}

read_write_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#read_write_access RedshiftIdcApplication#read_write_access}

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

&redshiftidcapplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess {
	Authorization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuerList <a name="RedshiftIdcApplicationAuthorizedTokenIssuerList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationAuthorizedTokenIssuerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationAuthorizedTokenIssuerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference <a name="RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationAuthorizedTokenIssuerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList">ResetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn">ResetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizedAudiencesList` <a name="ResetAuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList"></a>

```go
func ResetAuthorizedAudiencesList()
```

##### `ResetTrustedTokenIssuerArn` <a name="ResetTrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn"></a>

```go
func ResetTrustedTokenIssuerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput">AuthorizedAudiencesListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput">TrustedTokenIssuerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedAudiencesListInput`<sup>Optional</sup> <a name="AuthorizedAudiencesListInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput"></a>

```go
func AuthorizedAudiencesListInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedTokenIssuerArnInput`<sup>Optional</sup> <a name="TrustedTokenIssuerArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput"></a>

```go
func TrustedTokenIssuerArnInput() *string
```

- *Type:* *string

---

##### `AuthorizedAudiencesList`<sup>Required</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList"></a>

```go
func AuthorizedAudiencesList() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedTokenIssuerArn`<sup>Required</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn"></a>

```go
func TrustedTokenIssuerArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationLakeFormationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationServiceIntegrationLakeFormationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery">PutLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery">ResetLakeFormationQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormationQuery` <a name="PutLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery"></a>

```go
func PutLakeFormationQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLakeFormationQuery` <a name="ResetLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery"></a>

```go
func ResetLakeFormationQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput">LakeFormationQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormationQuery`<sup>Required</sup> <a name="LakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery"></a>

```go
func LakeFormationQuery() RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a>

---

##### `LakeFormationQueryInput`<sup>Optional</sup> <a name="LakeFormationQueryInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```go
func LakeFormationQueryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationList <a name="RedshiftIdcApplicationServiceIntegrationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationServiceIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationServiceIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationServiceIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation">PutLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants">PutS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation">ResetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants">ResetS3AccessGrants</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormation` <a name="PutLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation"></a>

```go
func PutLakeFormation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift"></a>

```go
func PutRedshift(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3AccessGrants` <a name="PutS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants"></a>

```go
func PutS3AccessGrants(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLakeFormation` <a name="ResetLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation"></a>

```go
func ResetLakeFormation()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift"></a>

```go
func ResetRedshift()
```

##### `ResetS3AccessGrants` <a name="ResetS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants"></a>

```go
func ResetS3AccessGrants()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation">LakeFormation</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift">Redshift</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants">S3AccessGrants</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput">LakeFormationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput">RedshiftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput">S3AccessGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormation`<sup>Required</sup> <a name="LakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation"></a>

```go
func LakeFormation() RedshiftIdcApplicationServiceIntegrationLakeFormationList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift"></a>

```go
func Redshift() RedshiftIdcApplicationServiceIntegrationRedshiftList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a>

---

##### `S3AccessGrants`<sup>Required</sup> <a name="S3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants"></a>

```go
func S3AccessGrants() RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a>

---

##### `LakeFormationInput`<sup>Optional</sup> <a name="LakeFormationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput"></a>

```go
func LakeFormationInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput"></a>

```go
func RedshiftInput() interface{}
```

- *Type:* interface{}

---

##### `S3AccessGrantsInput`<sup>Optional</sup> <a name="S3AccessGrantsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput"></a>

```go
func S3AccessGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationRedshiftConnectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationServiceIntegrationRedshiftConnectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationRedshiftList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationRedshiftList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationServiceIntegrationRedshiftList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationRedshiftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect">PutConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect">ResetConnect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnect` <a name="PutConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect"></a>

```go
func PutConnect(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnect` <a name="ResetConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect"></a>

```go
func ResetConnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput">ConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect"></a>

```go
func Connect() RedshiftIdcApplicationServiceIntegrationRedshiftConnectList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a>

---

##### `ConnectInput`<sup>Optional</sup> <a name="ConnectInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput"></a>

```go
func ConnectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationS3AccessGrantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess">PutReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess">ResetReadWriteAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReadWriteAccess` <a name="PutReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```go
func PutReadWriteAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetReadWriteAccess` <a name="ResetReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```go
func ResetReadWriteAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput">ReadWriteAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadWriteAccess`<sup>Required</sup> <a name="ReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```go
func ReadWriteAccess() RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a>

---

##### `ReadWriteAccessInput`<sup>Optional</sup> <a name="ReadWriteAccessInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```go
func ReadWriteAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get"></a>

```go
func Get(index *f64) RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/redshiftidcapplication"

redshiftidcapplication.NewRedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



