# `cloudfrontDistributionTenant` Submodule <a name="`cloudfrontDistributionTenant` Submodule" id="@cdktn/provider-aws.cloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistributionTenant <a name="CloudfrontDistributionTenant" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenant(scope Construct, id *string, config CloudfrontDistributionTenantConfig) CloudfrontDistributionTenant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig">CloudfrontDistributionTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig">CloudfrontDistributionTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations">PutCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain">PutDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest">PutManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId">ResetConnectionGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations">ResetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest">ResetManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetWaitForDeployment">ResetWaitForDeployment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomizations` <a name="PutCustomizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations"></a>

```go
func PutCustomizations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDomain` <a name="PutDomain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain"></a>

```go
func PutDomain(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedCertificateRequest` <a name="PutManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest"></a>

```go
func PutManagedCertificateRequest(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameter` <a name="PutParameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts"></a>

```go
func PutTimeouts(value CloudfrontDistributionTenantTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

---

##### `ResetConnectionGroupId` <a name="ResetConnectionGroupId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId"></a>

```go
func ResetConnectionGroupId()
```

##### `ResetCustomizations` <a name="ResetCustomizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations"></a>

```go
func ResetCustomizations()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetManagedCertificateRequest` <a name="ResetManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest"></a>

```go
func ResetManagedCertificateRequest()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWaitForDeployment` <a name="ResetWaitForDeployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetWaitForDeployment"></a>

```go
func ResetWaitForDeployment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.CloudfrontDistributionTenant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.CloudfrontDistributionTenant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.CloudfrontDistributionTenant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.CloudfrontDistributionTenant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontDistributionTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations">Customizations</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList">CloudfrontDistributionTenantCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domain">Domain</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList">CloudfrontDistributionTenantDomainList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest">ManagedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList">CloudfrontDistributionTenantManagedCertificateRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameter">Parameter</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList">CloudfrontDistributionTenantParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference">CloudfrontDistributionTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput">ConnectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput">CustomizationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput">DistributionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainInput">DomainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput">ManagedCertificateRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeploymentInput">WaitForDeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId">ConnectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId">DistributionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeployment">WaitForDeployment</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Customizations`<sup>Required</sup> <a name="Customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations"></a>

```go
func Customizations() CloudfrontDistributionTenantCustomizationsList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList">CloudfrontDistributionTenantCustomizationsList</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domain"></a>

```go
func Domain() CloudfrontDistributionTenantDomainList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList">CloudfrontDistributionTenantDomainList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedCertificateRequest`<sup>Required</sup> <a name="ManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```go
func ManagedCertificateRequest() CloudfrontDistributionTenantManagedCertificateRequestList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList">CloudfrontDistributionTenantManagedCertificateRequestList</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameter"></a>

```go
func Parameter() CloudfrontDistributionTenantParameterList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList">CloudfrontDistributionTenantParameterList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeouts"></a>

```go
func Timeouts() CloudfrontDistributionTenantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference">CloudfrontDistributionTenantTimeoutsOutputReference</a>

---

##### `ConnectionGroupIdInput`<sup>Optional</sup> <a name="ConnectionGroupIdInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput"></a>

```go
func ConnectionGroupIdInput() *string
```

- *Type:* *string

---

##### `CustomizationsInput`<sup>Optional</sup> <a name="CustomizationsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput"></a>

```go
func CustomizationsInput() interface{}
```

- *Type:* interface{}

---

##### `DistributionIdInput`<sup>Optional</sup> <a name="DistributionIdInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput"></a>

```go
func DistributionIdInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainInput"></a>

```go
func DomainInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedCertificateRequestInput`<sup>Optional</sup> <a name="ManagedCertificateRequestInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput"></a>

```go
func ManagedCertificateRequestInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForDeploymentInput`<sup>Optional</sup> <a name="WaitForDeploymentInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeploymentInput"></a>

```go
func WaitForDeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionGroupId`<sup>Required</sup> <a name="ConnectionGroupId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId"></a>

```go
func ConnectionGroupId() *string
```

- *Type:* *string

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId"></a>

```go
func DistributionId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WaitForDeployment`<sup>Required</sup> <a name="WaitForDeployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeployment"></a>

```go
func WaitForDeployment() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionTenantConfig <a name="CloudfrontDistributionTenantConfig" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DistributionId: *string,
	Name: *string,
	ConnectionGroupId: *string,
	Customizations: interface{},
	Domain: interface{},
	Enabled: interface{},
	ManagedCertificateRequest: interface{},
	Parameter: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts,
	WaitForDeployment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId">DistributionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId">ConnectionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations">Customizations</a></code> | <code>interface{}</code> | customizations block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domain">Domain</a></code> | <code>interface{}</code> | domain block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest">ManagedCertificateRequest</a></code> | <code>interface{}</code> | managed_certificate_request block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.waitForDeployment">WaitForDeployment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId"></a>

```go
DistributionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}.

---

##### `ConnectionGroupId`<sup>Optional</sup> <a name="ConnectionGroupId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId"></a>

```go
ConnectionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}.

---

##### `Customizations`<sup>Optional</sup> <a name="Customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations"></a>

```go
Customizations interface{}
```

- *Type:* interface{}

customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domain"></a>

```go
Domain interface{}
```

- *Type:* interface{}

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}.

---

##### `ManagedCertificateRequest`<sup>Optional</sup> <a name="ManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest"></a>

```go
ManagedCertificateRequest interface{}
```

- *Type:* interface{}

managed_certificate_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#parameter CloudfrontDistributionTenant#parameter}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.timeouts"></a>

```go
Timeouts CloudfrontDistributionTenantTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#timeouts CloudfrontDistributionTenant#timeouts}

---

##### `WaitForDeployment`<sup>Optional</sup> <a name="WaitForDeployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.waitForDeployment"></a>

```go
WaitForDeployment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}.

---

### CloudfrontDistributionTenantCustomizations <a name="CloudfrontDistributionTenantCustomizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantCustomizations {
	Certificate: interface{},
	GeoRestriction: interface{},
	WebAcl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate">Certificate</a></code> | <code>interface{}</code> | certificate block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestriction">GeoRestriction</a></code> | <code>interface{}</code> | geo_restriction block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl">WebAcl</a></code> | <code>interface{}</code> | web_acl block. |

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate CloudfrontDistributionTenant#certificate}

---

##### `GeoRestriction`<sup>Optional</sup> <a name="GeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestriction"></a>

```go
GeoRestriction interface{}
```

- *Type:* interface{}

geo_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#geo_restriction CloudfrontDistributionTenant#geo_restriction}

---

##### `WebAcl`<sup>Optional</sup> <a name="WebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl"></a>

```go
WebAcl interface{}
```

- *Type:* interface{}

web_acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#web_acl CloudfrontDistributionTenant#web_acl}

---

### CloudfrontDistributionTenantCustomizationsCertificate <a name="CloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantCustomizationsCertificate {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}.

---

### CloudfrontDistributionTenantCustomizationsGeoRestriction <a name="CloudfrontDistributionTenantCustomizationsGeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantCustomizationsGeoRestriction {
	Locations: *[]*string,
	RestrictionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.locations">Locations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.restrictionType">RestrictionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}. |

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}.

---

##### `RestrictionType`<sup>Optional</sup> <a name="RestrictionType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.restrictionType"></a>

```go
RestrictionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}.

---

### CloudfrontDistributionTenantCustomizationsWebAcl <a name="CloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantCustomizationsWebAcl {
	Action: *string,
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}.

---

### CloudfrontDistributionTenantDomain <a name="CloudfrontDistributionTenantDomain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantDomain {
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}.

---

### CloudfrontDistributionTenantManagedCertificateRequest <a name="CloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantManagedCertificateRequest {
	CertificateTransparencyLoggingPreference: *string,
	PrimaryDomainName: *string,
	ValidationTokenHost: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName">PrimaryDomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost">ValidationTokenHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}. |

---

##### `CertificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference"></a>

```go
CertificateTransparencyLoggingPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}.

---

##### `PrimaryDomainName`<sup>Optional</sup> <a name="PrimaryDomainName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName"></a>

```go
PrimaryDomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}.

---

##### `ValidationTokenHost`<sup>Optional</sup> <a name="ValidationTokenHost" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost"></a>

```go
ValidationTokenHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}.

---

### CloudfrontDistributionTenantParameter <a name="CloudfrontDistributionTenantParameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantParameter {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}.

---

### CloudfrontDistributionTenantTimeouts <a name="CloudfrontDistributionTenantTimeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

&cloudfrontdistributiontenant.CloudfrontDistributionTenantTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#create CloudfrontDistributionTenant#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#delete CloudfrontDistributionTenant#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#update CloudfrontDistributionTenant#update}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionTenantCustomizationsCertificateList <a name="CloudfrontDistributionTenantCustomizationsCertificateList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTenantCustomizationsCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="CloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionList <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsGeoRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTenantCustomizationsGeoRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetRestrictionType">ResetRestrictionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocations` <a name="ResetLocations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetLocations"></a>

```go
func ResetLocations()
```

##### `ResetRestrictionType` <a name="ResetRestrictionType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetRestrictionType"></a>

```go
func ResetRestrictionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionTypeInput">RestrictionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType">RestrictionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictionTypeInput`<sup>Optional</sup> <a name="RestrictionTypeInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionTypeInput"></a>

```go
func RestrictionTypeInput() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType"></a>

```go
func RestrictionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantCustomizationsList <a name="CloudfrontDistributionTenantCustomizationsList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTenantCustomizationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTenantCustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantCustomizationsOutputReference <a name="CloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTenantCustomizationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction">PutGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl">PutWebAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestriction">ResetGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl">ResetWebAcl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate"></a>

```go
func PutCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGeoRestriction` <a name="PutGeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction"></a>

```go
func PutGeoRestriction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWebAcl` <a name="PutWebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl"></a>

```go
func PutWebAcl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetGeoRestriction` <a name="ResetGeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestriction"></a>

```go
func ResetGeoRestriction()
```

##### `ResetWebAcl` <a name="ResetWebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl"></a>

```go
func ResetWebAcl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList">CloudfrontDistributionTenantCustomizationsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction">GeoRestriction</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList">CloudfrontDistributionTenantCustomizationsGeoRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">WebAcl</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList">CloudfrontDistributionTenantCustomizationsWebAclList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionInput">GeoRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput">WebAclInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```go
func Certificate() CloudfrontDistributionTenantCustomizationsCertificateList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList">CloudfrontDistributionTenantCustomizationsCertificateList</a>

---

##### `GeoRestriction`<sup>Required</sup> <a name="GeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction"></a>

```go
func GeoRestriction() CloudfrontDistributionTenantCustomizationsGeoRestrictionList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList">CloudfrontDistributionTenantCustomizationsGeoRestrictionList</a>

---

##### `WebAcl`<sup>Required</sup> <a name="WebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```go
func WebAcl() CloudfrontDistributionTenantCustomizationsWebAclList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList">CloudfrontDistributionTenantCustomizationsWebAclList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `GeoRestrictionInput`<sup>Optional</sup> <a name="GeoRestrictionInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionInput"></a>

```go
func GeoRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `WebAclInput`<sup>Optional</sup> <a name="WebAclInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput"></a>

```go
func WebAclInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantCustomizationsWebAclList <a name="CloudfrontDistributionTenantCustomizationsWebAclList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsWebAclList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTenantCustomizationsWebAclList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="CloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantCustomizationsWebAclOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantDomainList <a name="CloudfrontDistributionTenantDomainList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantDomainList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTenantDomainList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTenantDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantDomainOutputReference <a name="CloudfrontDistributionTenantDomainOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantDomainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTenantDomainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantManagedCertificateRequestList <a name="CloudfrontDistributionTenantManagedCertificateRequestList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantManagedCertificateRequestList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTenantManagedCertificateRequestList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="CloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantManagedCertificateRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference">ResetCertificateTransparencyLoggingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName">ResetPrimaryDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost">ResetValidationTokenHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateTransparencyLoggingPreference` <a name="ResetCertificateTransparencyLoggingPreference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```go
func ResetCertificateTransparencyLoggingPreference()
```

##### `ResetPrimaryDomainName` <a name="ResetPrimaryDomainName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName"></a>

```go
func ResetPrimaryDomainName()
```

##### `ResetValidationTokenHost` <a name="ResetValidationTokenHost" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost"></a>

```go
func ResetValidationTokenHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput">CertificateTransparencyLoggingPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput">PrimaryDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput">ValidationTokenHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">PrimaryDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">ValidationTokenHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="CertificateTransparencyLoggingPreferenceInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```go
func CertificateTransparencyLoggingPreferenceInput() *string
```

- *Type:* *string

---

##### `PrimaryDomainNameInput`<sup>Optional</sup> <a name="PrimaryDomainNameInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput"></a>

```go
func PrimaryDomainNameInput() *string
```

- *Type:* *string

---

##### `ValidationTokenHostInput`<sup>Optional</sup> <a name="ValidationTokenHostInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput"></a>

```go
func ValidationTokenHostInput() *string
```

- *Type:* *string

---

##### `CertificateTransparencyLoggingPreference`<sup>Required</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```go
func CertificateTransparencyLoggingPreference() *string
```

- *Type:* *string

---

##### `PrimaryDomainName`<sup>Required</sup> <a name="PrimaryDomainName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```go
func PrimaryDomainName() *string
```

- *Type:* *string

---

##### `ValidationTokenHost`<sup>Required</sup> <a name="ValidationTokenHost" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```go
func ValidationTokenHost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantParameterList <a name="CloudfrontDistributionTenantParameterList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontDistributionTenantParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get"></a>

```go
func Get(index *f64) CloudfrontDistributionTenantParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantParameterOutputReference <a name="CloudfrontDistributionTenantParameterOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontDistributionTenantParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontDistributionTenantTimeoutsOutputReference <a name="CloudfrontDistributionTenantTimeoutsOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfrontdistributiontenant"

cloudfrontdistributiontenant.NewCloudfrontDistributionTenantTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontDistributionTenantTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



