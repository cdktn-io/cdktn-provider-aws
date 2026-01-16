# `apiGatewayDomainName` Submodule <a name="`apiGatewayDomainName` Submodule" id="@cdktn/provider-aws.apiGatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainName <a name="ApiGatewayDomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.NewApiGatewayDomainName(scope Construct, id *string, config ApiGatewayDomainNameConfig) ApiGatewayDomainName
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication">PutMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody">ResetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey">ResetCertificatePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointAccessMode">ResetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication">ResetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn">ResetOwnershipVerificationCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn">ResetRegionalCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName">ResetRegionalCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration"></a>

```go
func PutEndpointConfiguration(value ApiGatewayDomainNameEndpointConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `PutMutualTlsAuthentication` <a name="PutMutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication"></a>

```go
func PutMutualTlsAuthentication(value ApiGatewayDomainNameMutualTlsAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putTimeouts"></a>

```go
func PutTimeouts(value ApiGatewayDomainNameTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a>

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetCertificateBody` <a name="ResetCertificateBody" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody"></a>

```go
func ResetCertificateBody()
```

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain"></a>

```go
func ResetCertificateChain()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetCertificatePrivateKey` <a name="ResetCertificatePrivateKey" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey"></a>

```go
func ResetCertificatePrivateKey()
```

##### `ResetEndpointAccessMode` <a name="ResetEndpointAccessMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointAccessMode"></a>

```go
func ResetEndpointAccessMode()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration"></a>

```go
func ResetEndpointConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId"></a>

```go
func ResetId()
```

##### `ResetMutualTlsAuthentication` <a name="ResetMutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication"></a>

```go
func ResetMutualTlsAuthentication()
```

##### `ResetOwnershipVerificationCertificateArn` <a name="ResetOwnershipVerificationCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn"></a>

```go
func ResetOwnershipVerificationCertificateArn()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRegionalCertificateArn` <a name="ResetRegionalCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn"></a>

```go
func ResetRegionalCertificateArn()
```

##### `ResetRegionalCertificateName` <a name="ResetRegionalCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName"></a>

```go
func ResetRegionalCertificateName()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy"></a>

```go
func ResetSecurityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayDomainName resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.ApiGatewayDomainName_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.ApiGatewayDomainName_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.ApiGatewayDomainName_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.ApiGatewayDomainName_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiGatewayDomainName resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiGatewayDomainName to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiGatewayDomainName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayDomainName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate">CertificateUploadDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName">CloudfrontDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId">CloudfrontZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameId">DomainNameId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName">RegionalDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId">RegionalZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference">ApiGatewayDomainNameTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput">CertificateBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput">CertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput">CertificatePrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessModeInput">EndpointAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput">MutualTlsAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput">OwnershipVerificationCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput">RegionalCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput">RegionalCertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody">CertificateBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey">CertificatePrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName">RegionalCertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CertificateUploadDate`<sup>Required</sup> <a name="CertificateUploadDate" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate"></a>

```go
func CertificateUploadDate() *string
```

- *Type:* *string

---

##### `CloudfrontDomainName`<sup>Required</sup> <a name="CloudfrontDomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName"></a>

```go
func CloudfrontDomainName() *string
```

- *Type:* *string

---

##### `CloudfrontZoneId`<sup>Required</sup> <a name="CloudfrontZoneId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId"></a>

```go
func CloudfrontZoneId() *string
```

- *Type:* *string

---

##### `DomainNameId`<sup>Required</sup> <a name="DomainNameId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameId"></a>

```go
func DomainNameId() *string
```

- *Type:* *string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration"></a>

```go
func EndpointConfiguration() ApiGatewayDomainNameEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a>

---

##### `MutualTlsAuthentication`<sup>Required</sup> <a name="MutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication"></a>

```go
func MutualTlsAuthentication() ApiGatewayDomainNameMutualTlsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `RegionalDomainName`<sup>Required</sup> <a name="RegionalDomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName"></a>

```go
func RegionalDomainName() *string
```

- *Type:* *string

---

##### `RegionalZoneId`<sup>Required</sup> <a name="RegionalZoneId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId"></a>

```go
func RegionalZoneId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeouts"></a>

```go
func Timeouts() ApiGatewayDomainNameTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference">ApiGatewayDomainNameTimeoutsOutputReference</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `CertificateBodyInput`<sup>Optional</sup> <a name="CertificateBodyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput"></a>

```go
func CertificateBodyInput() *string
```

- *Type:* *string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput"></a>

```go
func CertificateChainInput() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `CertificatePrivateKeyInput`<sup>Optional</sup> <a name="CertificatePrivateKeyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput"></a>

```go
func CertificatePrivateKeyInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EndpointAccessModeInput`<sup>Optional</sup> <a name="EndpointAccessModeInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessModeInput"></a>

```go
func EndpointAccessModeInput() *string
```

- *Type:* *string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput"></a>

```go
func EndpointConfigurationInput() ApiGatewayDomainNameEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MutualTlsAuthenticationInput`<sup>Optional</sup> <a name="MutualTlsAuthenticationInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput"></a>

```go
func MutualTlsAuthenticationInput() ApiGatewayDomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `OwnershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArnInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput"></a>

```go
func OwnershipVerificationCertificateArnInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `RegionalCertificateArnInput`<sup>Optional</sup> <a name="RegionalCertificateArnInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput"></a>

```go
func RegionalCertificateArnInput() *string
```

- *Type:* *string

---

##### `RegionalCertificateNameInput`<sup>Optional</sup> <a name="RegionalCertificateNameInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput"></a>

```go
func RegionalCertificateNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `CertificateBody`<sup>Required</sup> <a name="CertificateBody" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody"></a>

```go
func CertificateBody() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `CertificatePrivateKey`<sup>Required</sup> <a name="CertificatePrivateKey" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey"></a>

```go
func CertificatePrivateKey() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessMode"></a>

```go
func EndpointAccessMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnershipVerificationCertificateArn`<sup>Required</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn"></a>

```go
func OwnershipVerificationCertificateArn() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RegionalCertificateArn`<sup>Required</sup> <a name="RegionalCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn"></a>

```go
func RegionalCertificateArn() *string
```

- *Type:* *string

---

##### `RegionalCertificateName`<sup>Required</sup> <a name="RegionalCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName"></a>

```go
func RegionalCertificateName() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameConfig <a name="ApiGatewayDomainNameConfig" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

&apigatewaydomainname.ApiGatewayDomainNameConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	CertificateArn: *string,
	CertificateBody: *string,
	CertificateChain: *string,
	CertificateName: *string,
	CertificatePrivateKey: *string,
	EndpointAccessMode: *string,
	EndpointConfiguration: github.com/cdktn-io/cdktn-provider-aws-go/aws/v21.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration,
	Id: *string,
	MutualTlsAuthentication: github.com/cdktn-io/cdktn-provider-aws-go/aws/v21.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication,
	OwnershipVerificationCertificateArn: *string,
	Policy: *string,
	Region: *string,
	RegionalCertificateArn: *string,
	RegionalCertificateName: *string,
	SecurityPolicy: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v21.apiGatewayDomainName.ApiGatewayDomainNameTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody">CertificateBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey">CertificatePrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#endpoint_access_mode ApiGatewayDomainName#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#id ApiGatewayDomainName#id}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#policy ApiGatewayDomainName#policy}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName">RegionalCertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#tags ApiGatewayDomainName#tags}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}.

---

##### `CertificateBody`<sup>Optional</sup> <a name="CertificateBody" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody"></a>

```go
CertificateBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}.

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain"></a>

```go
CertificateChain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}.

---

##### `CertificatePrivateKey`<sup>Optional</sup> <a name="CertificatePrivateKey" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey"></a>

```go
CertificatePrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}.

---

##### `EndpointAccessMode`<sup>Optional</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointAccessMode"></a>

```go
EndpointAccessMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#endpoint_access_mode ApiGatewayDomainName#endpoint_access_mode}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration"></a>

```go
EndpointConfiguration ApiGatewayDomainNameEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#id ApiGatewayDomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutualTlsAuthentication`<sup>Optional</sup> <a name="MutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication"></a>

```go
MutualTlsAuthentication ApiGatewayDomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}

---

##### `OwnershipVerificationCertificateArn`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn"></a>

```go
OwnershipVerificationCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#policy ApiGatewayDomainName#policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#region ApiGatewayDomainName#region}

---

##### `RegionalCertificateArn`<sup>Optional</sup> <a name="RegionalCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn"></a>

```go
RegionalCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}.

---

##### `RegionalCertificateName`<sup>Optional</sup> <a name="RegionalCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName"></a>

```go
RegionalCertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}.

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#tags ApiGatewayDomainName#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.timeouts"></a>

```go
Timeouts ApiGatewayDomainNameTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#timeouts ApiGatewayDomainName#timeouts}

---

### ApiGatewayDomainNameEndpointConfiguration <a name="ApiGatewayDomainNameEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

&apigatewaydomainname.ApiGatewayDomainNameEndpointConfiguration {
	Types: *[]*string,
	IpAddressType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types">Types</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#types ApiGatewayDomainName#types}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#ip_address_type ApiGatewayDomainName#ip_address_type}. |

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types"></a>

```go
Types *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#types ApiGatewayDomainName#types}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#ip_address_type ApiGatewayDomainName#ip_address_type}.

---

### ApiGatewayDomainNameMutualTlsAuthentication <a name="ApiGatewayDomainNameMutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

&apigatewaydomainname.ApiGatewayDomainNameMutualTlsAuthentication {
	TruststoreUri: *string,
	TruststoreVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri">TruststoreUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion">TruststoreVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}. |

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```go
TruststoreUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}.

---

##### `TruststoreVersion`<sup>Optional</sup> <a name="TruststoreVersion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```go
TruststoreVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}.

---

### ApiGatewayDomainNameTimeouts <a name="ApiGatewayDomainNameTimeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

&apigatewaydomainname.ApiGatewayDomainNameTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#create ApiGatewayDomainName#create}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#update ApiGatewayDomainName#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#create ApiGatewayDomainName#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name#update ApiGatewayDomainName#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDomainNameEndpointConfigurationOutputReference <a name="ApiGatewayDomainNameEndpointConfigurationOutputReference" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.NewApiGatewayDomainNameEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayDomainNameEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput"></a>

```go
func TypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiGatewayDomainNameEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---


### ApiGatewayDomainNameMutualTlsAuthenticationOutputReference <a name="ApiGatewayDomainNameMutualTlsAuthenticationOutputReference" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.NewApiGatewayDomainNameMutualTlsAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayDomainNameMutualTlsAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">ResetTruststoreVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTruststoreVersion` <a name="ResetTruststoreVersion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```go
func ResetTruststoreVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">TruststoreUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">TruststoreVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">TruststoreUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">TruststoreVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TruststoreUriInput`<sup>Optional</sup> <a name="TruststoreUriInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```go
func TruststoreUriInput() *string
```

- *Type:* *string

---

##### `TruststoreVersionInput`<sup>Optional</sup> <a name="TruststoreVersionInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```go
func TruststoreVersionInput() *string
```

- *Type:* *string

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```go
func TruststoreUri() *string
```

- *Type:* *string

---

##### `TruststoreVersion`<sup>Required</sup> <a name="TruststoreVersion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```go
func TruststoreVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiGatewayDomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---


### ApiGatewayDomainNameTimeoutsOutputReference <a name="ApiGatewayDomainNameTimeoutsOutputReference" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/apigatewaydomainname"

apigatewaydomainname.NewApiGatewayDomainNameTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayDomainNameTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



