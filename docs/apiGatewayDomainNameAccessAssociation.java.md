# `apiGatewayDomainNameAccessAssociation` Submodule <a name="`apiGatewayDomainNameAccessAssociation` Submodule" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainNameAccessAssociation <a name="ApiGatewayDomainNameAccessAssociation" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association aws_api_gateway_domain_name_access_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.api_gateway_domain_name_access_association.ApiGatewayDomainNameAccessAssociation;

ApiGatewayDomainNameAccessAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessAssociationSource(java.lang.String)
    .accessAssociationSourceType(java.lang.String)
    .domainNameArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSource">accessAssociationSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}.

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}.

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.domainNameArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#region ApiGatewayDomainNameAccessAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.api_gateway_domain_name_access_association.ApiGatewayDomainNameAccessAssociation;

ApiGatewayDomainNameAccessAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.api_gateway_domain_name_access_association.ApiGatewayDomainNameAccessAssociation;

ApiGatewayDomainNameAccessAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.api_gateway_domain_name_access_association.ApiGatewayDomainNameAccessAssociation;

ApiGatewayDomainNameAccessAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.api_gateway_domain_name_access_association.ApiGatewayDomainNameAccessAssociation;

ApiGatewayDomainNameAccessAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiGatewayDomainNameAccessAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiGatewayDomainNameAccessAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiGatewayDomainNameAccessAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiGatewayDomainNameAccessAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceInput">accessAssociationSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput">accessAssociationSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArnInput">domainNameArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSource">accessAssociationSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `accessAssociationSourceInput`<sup>Optional</sup> <a name="accessAssociationSourceInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceInput"></a>

```java
public java.lang.String getAccessAssociationSourceInput();
```

- *Type:* java.lang.String

---

##### `accessAssociationSourceTypeInput`<sup>Optional</sup> <a name="accessAssociationSourceTypeInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput"></a>

```java
public java.lang.String getAccessAssociationSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `domainNameArnInput`<sup>Optional</sup> <a name="domainNameArnInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArnInput"></a>

```java
public java.lang.String getDomainNameArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSource"></a>

```java
public java.lang.String getAccessAssociationSource();
```

- *Type:* java.lang.String

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceType"></a>

```java
public java.lang.String getAccessAssociationSourceType();
```

- *Type:* java.lang.String

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArn"></a>

```java
public java.lang.String getDomainNameArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameAccessAssociationConfig <a name="ApiGatewayDomainNameAccessAssociationConfig" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.api_gateway_domain_name_access_association.ApiGatewayDomainNameAccessAssociationConfig;

ApiGatewayDomainNameAccessAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessAssociationSource(java.lang.String)
    .accessAssociationSourceType(java.lang.String)
    .domainNameArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSource">accessAssociationSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSource"></a>

```java
public java.lang.String getAccessAssociationSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}.

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType"></a>

```java
public java.lang.String getAccessAssociationSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}.

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.domainNameArn"></a>

```java
public java.lang.String getDomainNameArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#region ApiGatewayDomainNameAccessAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}.

---



